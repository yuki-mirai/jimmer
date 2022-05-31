package org.babyfish.jimmer.sql.query;

import org.babyfish.jimmer.sql.ast.Expression;
import org.babyfish.jimmer.sql.common.AbstractQueryTest;
import static org.babyfish.jimmer.sql.common.Constants.*;
import org.babyfish.jimmer.sql.model.*;
import org.junit.jupiter.api.Test;

import javax.persistence.criteria.JoinType;
import java.math.BigDecimal;
import java.util.Arrays;

public class JoinTest extends AbstractQueryTest {

    @Test
    public void testSimple() {
        executeAndExpect(
                getSqlClient().createQuery(BookTable.class, (q, book) -> {
                    return q.select(book);
                }),
                ctx -> {
                    ctx.sql(
                            "select " +
                                    "tb_1_.ID, tb_1_.NAME, tb_1_.EDITION, tb_1_.PRICE, tb_1_.STORE_ID " +
                                    "from BOOK as tb_1_"
                    );
                }
        );
    }

    @Test
    public void testMergedJoinFromParentToChild() {
        executeAndExpect(
                getSqlClient().createQuery(BookStoreTable.class, (q, store) -> {
                    q.where(
                            store.<BookTable>join("books", JoinType.LEFT).price()
                                    .ge(new BigDecimal(20))
                    );
                    q.where(
                            store.<BookTable>join("books").price()
                                    .le(new BigDecimal(30))
                    );
                    q.where(
                            store
                                    .<BookTable>join("books")
                                    .<AuthorTable>join("authors")
                                    .firstName()
                                    .ilike("Alex")
                    );
                    return q.select(Expression.constant(1));
                }),
                ctx -> {
                    ctx.sql(
                            "select 1 " +
                                    "from BOOK_STORE as tb_1_ " +
                                    "inner join BOOK as tb_2_ on tb_1_.ID = tb_2_.STORE_ID " +
                                    "inner join BOOK_AUTHOR_MAPPING as tb_3_ on tb_2_.ID = tb_3_.BOOK_ID " +
                                    "inner join AUTHOR as tb_4_ on tb_3_.AUTHOR_ID = tb_4_.ID " +
                                    "where tb_2_.PRICE >= ? and tb_2_.PRICE <= ? and lower(tb_4_.FIRST_NAME) like ?"
                    );
                    ctx.variables(
                            new BigDecimal(20), new BigDecimal(30), "%alex%"
                    );
                }
        );
    }

    @Test
    public void testMergedJoinFromChildToParent() {
        executeAndExpect(
                getSqlClient().createQuery(AuthorTable.class, (q, author) -> {
                    q.where(
                            author
                                    .<BookTable>join("books", JoinType.LEFT)
                                    .price()
                                    .ge(new BigDecimal(20))
                    );
                    q.where(
                            author
                                    .<BookTable>join("books")
                                    .price()
                                    .le(new BigDecimal(30))
                    );
                    q.where(
                            author
                                    .<BookTable>join("books")
                                    .store()
                                    .name()
                                    .ilike("MANNING")
                    );
                    return q.select(Expression.constant(1));
                }),
                ctx -> {
                    ctx.sql(
                            "select 1 " +
                                    "from AUTHOR as tb_1_ " +
                                    "inner join BOOK_AUTHOR_MAPPING as tb_2_ on tb_1_.ID = tb_2_.AUTHOR_ID " +
                                    "inner join BOOK as tb_3_ on tb_2_.BOOK_ID = tb_3_.ID " +
                                    "inner join BOOK_STORE as tb_4_ on tb_3_.STORE_ID = tb_4_.ID " +
                                    "where tb_3_.PRICE >= ? and tb_3_.PRICE <= ? and lower(tb_4_.NAME) like ?"
                    );
                    ctx.variables(new BigDecimal(20), new BigDecimal(30), "%manning%");
                }
        );
    }

    @Test
    public void testUnnecessaryJoin() {
        executeAndExpect(
                getSqlClient().createQuery(BookTable.class, (q, book) -> {
                    q.where(
                            book.store().id().in(Arrays.asList(oreillyId, manningId))
                    );
                    return q.select(Expression.constant(1));
                }),
                ctx -> {
                    ctx.sql(
                            "select 1 from BOOK as tb_1_ where tb_1_.STORE_ID in (?, ?)"
                    );
                    ctx.variables(oreillyId, manningId);
                }
        );
    }

    @Test
    public void testHalfJoin() {
        executeAndExpect(
                getSqlClient().createQuery(BookTable.class, (q, book) -> {
                    q.where(
                            book.<AuthorTable>join("authors")
                                    .id()
                                    .in(Arrays.asList(alexId, borisId))
                    );
                    return q.select(Expression.constant(1));
                }),
                ctx -> {
                    ctx.sql(
                            "select 1 " +
                                    "from BOOK as tb_1_ " +
                                    "inner join BOOK_AUTHOR_MAPPING as tb_2_ on tb_1_.ID = tb_2_.BOOK_ID " +
                                    "where tb_2_.AUTHOR_ID in (?, ?)"
                    );
                    ctx.variables(alexId, borisId);
                }
        );
    }

    @Test
    public void testHalfInverseJoin() {
        executeAndExpect(
                getSqlClient().createQuery(AuthorTable.class, (q, author) -> {
                    q.where(
                            author
                                    .<BookTable>join("books")
                                    .id()
                                    .in(Arrays.asList(learningGraphQLId1, learningGraphQLId2))
                    );
                    return q.select(Expression.constant(1));
                }),
                ctx -> {
                    ctx.sql(
                            "select 1 " +
                                    "from AUTHOR as tb_1_ " +
                                    "inner join BOOK_AUTHOR_MAPPING as tb_2_ on tb_1_.ID = tb_2_.AUTHOR_ID " +
                                    "where tb_2_.BOOK_ID in (?, ?)"
                    );
                    ctx.variables(learningGraphQLId1, learningGraphQLId2);
                }
        );
    }

    @Test
    public void testOneToManyCannotBeOptimized() {
        executeAndExpect(
                getSqlClient().createQuery(BookStoreTable.class, (q, store) -> {
                    q.where(
                            store
                                    .<BookTable>join("books")
                                    .id()
                                    .in(Arrays.asList(learningGraphQLId1, learningGraphQLId2))
                    );
                    return q.select(Expression.constant(1));
                }),
                ctx -> {
                    ctx.sql(
                            "select 1 " +
                                    "from BOOK_STORE as tb_1_ " +
                                    "inner join BOOK as tb_2_ on tb_1_.ID = tb_2_.STORE_ID " +
                                    "where tb_2_.ID in (?, ?)"
                    );
                    ctx.variables(learningGraphQLId1, learningGraphQLId2);
                }
        );
    }

    @Test
    public void testOuterJoin() {
        executeAndExpect(
                getSqlClient().createQuery(BookTable.class, (q, book) -> {
                    q.where(
                            book.store(JoinType.LEFT).id().isNotNull().or(
                                    book.store(JoinType.LEFT).name().ilike("MANNING")
                            )
                    );
                    return q.select(Expression.constant(1));
                }),
                ctx -> {
                    ctx.sql(
                            "select 1 " +
                                    "from BOOK as tb_1_ " +
                                    "left join BOOK_STORE as tb_2_ on tb_1_.STORE_ID = tb_2_.ID " +
                                    "where tb_1_.STORE_ID is not null " +
                                    "or lower(tb_2_.NAME) like ?"
                    );
                    ctx.variables("%manning%");
                }
        );
    }
}
