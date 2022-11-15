package org.babyfish.jimmer.sql.ast.impl.mutation;

import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.sql.ast.impl.AstContext;
import org.babyfish.jimmer.sql.meta.MiddleTable;
import org.babyfish.jimmer.sql.JSqlClient;
import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.ast.tuple.Tuple2;
import org.babyfish.jimmer.sql.meta.Storage;
import org.babyfish.jimmer.sql.runtime.ExecutionPurpose;
import org.babyfish.jimmer.sql.runtime.Selectors;
import org.babyfish.jimmer.sql.runtime.SqlBuilder;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.*;

class MiddleTableOperator {

    private final JSqlClient sqlClient;

    private final Connection con;

    private final ImmutableProp prop;

    private final MiddleTable middleTable;

    private final Expression<?> sourceIdExpression;

    private final Expression<?> targetIdExpression;

    private final MutationCache cache;

    private final MutationTrigger trigger;

    private MiddleTableOperator(
            JSqlClient sqlClient,
            Connection con,
            ImmutableProp prop,
            MiddleTable middleTable,
            MutationCache cache,
            MutationTrigger trigger
    ) {
        this.sqlClient = sqlClient;
        this.con = con;
        this.prop = prop;
        this.middleTable = middleTable;
        this.sourceIdExpression = Expression.any().nullValue(prop.getDeclaringType().getIdProp().getElementClass());
        this.targetIdExpression = Expression.any().nullValue(prop.getTargetType().getIdProp().getElementClass());
        if (trigger != null) {
            this.cache = cache;
            this.trigger = trigger;
        } else {
            this.cache = null;
            this.trigger = null;
        }
    }

    public static MiddleTableOperator tryGet(
            JSqlClient sqlClient,
            Connection con,
            ImmutableProp prop,
            MutationCache cache,
            MutationTrigger trigger
    ) {
        Storage storage = prop.getStorage();
        if (storage instanceof MiddleTable) {
            return new MiddleTableOperator(
                    sqlClient, con, prop, (MiddleTable) storage, cache, trigger
            );
        }
        ImmutableProp mappedBy = prop.getMappedBy();
        if (mappedBy != null) {
            storage = mappedBy.getStorage();
            if (storage instanceof MiddleTable) {
                return new MiddleTableOperator(
                        sqlClient, con, prop, ((MiddleTable) storage).getInverse(), cache, trigger
                );
            }
        }
        return null;
    }

    List<Object> getTargetIds(Object id) {
        SqlBuilder builder = new SqlBuilder(new AstContext(sqlClient));
        builder
                .sql("select ")
                .sql(middleTable.getTargetJoinColumnName())
                .sql(" from ")
                .sql(middleTable.getTableName())
                .sql(" where ")
                .sql(middleTable.getJoinColumnName())
                .sql(" = ")
                .variable(id);
        Tuple2<String, List<Object>> sqlResult = builder.build();
        return Selectors.select(
                sqlClient,
                con,
                sqlResult.get_1(),
                sqlResult.get_2(),
                Collections.singletonList(targetIdExpression),
                ExecutionPurpose.MUTATE
        );
    }

    IdPairReader getIdPairReader(Collection<Object> sourceIds) {
        SqlBuilder builder = new SqlBuilder(new AstContext(sqlClient));
        builder
                .sql("select ")
                .sql(middleTable.getJoinColumnName())
                .sql(", ")
                .sql(middleTable.getTargetJoinColumnName())
                .sql(" from ")
                .sql(middleTable.getTableName())
                .sql(" where ")
                .sql(middleTable.getJoinColumnName())
                .sql(" in(");
        boolean addComma = false;
        for (Object sourceId : sourceIds) {
            if (addComma) {
                builder.sql(", ");
            } else {
                addComma = true;
            }
            builder.variable(sourceId);
        }
        builder.sql(")");
        Tuple2<String, List<Object>> sqlResult = builder.build();
        List<Tuple2<Object, Object>> tuples = Selectors.select(
                sqlClient,
                con,
                sqlResult.get_1(),
                sqlResult.get_2(),
                Arrays.asList(sourceIdExpression, targetIdExpression),
                ExecutionPurpose.MUTATE
        );
        return new TupleReader(tuples);
    }

    int addTargetIds(Object sourceId, Collection<Object> targetIds) {
        if (targetIds.isEmpty()) {
            return 0;
        }
        Set<Object> set = targetIds instanceof Set<?> ?
                (Set<Object>)targetIds :
                new LinkedHashSet<>(targetIds);
        return add(new OneToManyReader(sourceId, set));
    }

    int add(IdPairReader reader) {

        tryPrepareEvent(true, reader);

        SqlBuilder builder = new SqlBuilder(new AstContext(sqlClient));
        builder
                .sql("insert into ")
                .sql(middleTable.getTableName())
                .sql("(")
                .sql(middleTable.getJoinColumnName())
                .sql(", ")
                .sql(middleTable.getTargetJoinColumnName())
                .sql(") values ");
        String separator = "";
        while (reader.read()) {
            builder.sql(separator);
            separator = ", ";
            builder
                    .sql("(")
                    .variable(reader.sourceId())
                    .sql(", ")
                    .variable(reader.targetId())
                    .sql(")");
        }
        Tuple2<String, List<Object>> sqlResult = builder.build();
        return sqlClient.getExecutor().execute(
                con,
                sqlResult.get_1(),
                sqlResult.get_2(),
                ExecutionPurpose.MUTATE,
                null,
                PreparedStatement::executeUpdate
        );
    }

    int removeTargetIds(Object sourceId, Collection<Object> targetIds) {
        if (targetIds.isEmpty()) {
            return 0;
        }
        Set<Object> set = targetIds instanceof Set<?> ?
                (Set<Object>)targetIds :
                new LinkedHashSet<>(targetIds);
        return remove(new OneToManyReader(sourceId, set));
    }

    int remove(IdPairReader reader) {

        tryPrepareEvent(false, reader);

        SqlBuilder builder = new SqlBuilder(new AstContext(sqlClient));
        builder
                .sql("delete from ")
                .sql(middleTable.getTableName())
                .sql(" where (")
                .sql(middleTable.getJoinColumnName())
                .sql(", ")
                .sql(middleTable.getTargetJoinColumnName())
                .sql(") in (");
        String separator = "";
        while (reader.read()) {
            builder.sql(separator);
            separator = ", ";
            builder
                    .sql("(")
                    .variable(reader.sourceId())
                    .sql(", ")
                    .variable(reader.targetId())
                    .sql(")");
        }
        builder.sql(")");
        Tuple2<String, List<Object>> sqlResult = builder.build();
        return sqlClient.getExecutor().execute(
                con,
                sqlResult.get_1(),
                sqlResult.get_2(),
                ExecutionPurpose.MUTATE,
                null,
                PreparedStatement::executeUpdate
        );
    }

    int setTargetIds(Object sourceId, Collection<Object> targetIds) {

        Set<Object> oldTargetIds = new LinkedHashSet<>(getTargetIds(sourceId));

        Set<Object> addingTargetIds = new LinkedHashSet<>(targetIds);
        addingTargetIds.removeAll(oldTargetIds);

        Set<Object> removingTargetIds = new LinkedHashSet<>(oldTargetIds);
        removingTargetIds.removeAll(targetIds);

        return removeTargetIds(sourceId, removingTargetIds) + addTargetIds(sourceId, addingTargetIds);
    }

    public int removeBySourceIds(Collection<Object> sourceIds) {
        if (trigger != null) {
            IdPairReader reader = getIdPairReader(sourceIds);
            return remove(reader);
        }
        SqlBuilder builder = new SqlBuilder(new AstContext(sqlClient));
        builder.sql("delete from ");
        builder.sql(middleTable.getTableName());
        builder.sql(" where ");
        builder.sql(middleTable.getJoinColumnName());
        builder.sql(" in(");
        String separator = "";
        for (Object id : sourceIds) {
            builder.sql(separator);
            separator = ", ";
            builder.variable(id);
        }
        builder.sql(")");
        Tuple2<String, List<Object>> sqlResult = builder.build();
        return sqlClient
                .getExecutor()
                .execute(
                        con,
                        sqlResult.get_1(),
                        sqlResult.get_2(),
                        ExecutionPurpose.DELETE,
                        null,
                        PreparedStatement::executeUpdate
                );
    }

    private void tryPrepareEvent(boolean insert, IdPairReader reader) {

        MutationTrigger trigger = this.trigger;
        if (trigger == null) {
            return;
        }

        while (reader.read()) {
            Object sourceId = reader.sourceId();
            Object targetId = reader.targetId();
            if (insert) {
                trigger.insertMiddleTable(prop, sourceId, targetId);
            } else {
                trigger.deleteMiddleTable(prop, sourceId, targetId);
            }
        }

        reader.reset();
    }

    interface IdPairReader {
        void reset();
        boolean read();
        Object sourceId();
        Object targetId();
    }

    private static class OneToManyReader implements IdPairReader {

        private final Object sourceId;

        private final Collection<Object> targetIds;

        private Iterator<Object> targetIdItr;

        private Object currentTargetId;

        OneToManyReader(Object sourceId, Collection<Object> targetIds) {
            this.sourceId = sourceId;
            this.targetIds = targetIds;
            this.targetIdItr = targetIds.iterator();
        }

        @Override
        public void reset() {
            this.targetIdItr = targetIds.iterator();
        }

        @Override
        public boolean read() {
            if (targetIdItr.hasNext()) {
                currentTargetId = targetIdItr.next();
                return true;
            }
            return false;
        }

        @Override
        public Object sourceId() {
            return sourceId;
        }

        @Override
        public Object targetId() {
            return currentTargetId;
        }
    }

    public static class TupleReader implements MiddleTableOperator.IdPairReader {

        private final Collection<Tuple2<Object, Object>> idTuples;

        private Iterator<Tuple2<Object, Object>> idTupleItr;

        private Tuple2<Object, Object> currentIdPair;

        public TupleReader(Collection<Tuple2<Object, Object>> idTuples) {
            this.idTuples = idTuples;
            idTupleItr = idTuples.iterator();
        }

        @Override
        public void reset() {
            idTupleItr = idTuples.iterator();
        }

        @Override
        public boolean read() {
            if (idTupleItr.hasNext()) {
                currentIdPair = idTupleItr.next();
                return true;
            }
            return false;
        }

        @Override
        public Object sourceId() {
            return currentIdPair.get_1();
        }

        @Override
        public Object targetId() {
            return currentIdPair.get_2();
        }
    }
}
