package org.babyfish.jimmer.sql;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.ArrayType;
import com.fasterxml.jackson.databind.type.CollectionType;
import com.fasterxml.jackson.databind.type.MapType;
import com.fasterxml.jackson.databind.type.SimpleType;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.module.kotlin.KotlinModule;
import org.babyfish.jimmer.impl.util.PropCache;
import org.babyfish.jimmer.jackson.ImmutableModule;
import org.babyfish.jimmer.meta.ImmutableProp;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.meta.ModelException;
import org.babyfish.jimmer.sql.dialect.Dialect;
import org.babyfish.jimmer.sql.runtime.ScalarProvider;
import org.babyfish.jimmer.impl.util.StaticCache;
import org.jetbrains.annotations.NotNull;

import java.lang.reflect.*;
import java.util.*;

class ScalarProviderManager {

    private static final Set<Class<?>> GENERIC_TYPES;

    private static final ObjectMapper DEFAULT_OBJECT_MAPPER;

    private final StaticCache<Class<?>, ScalarProvider<?, ?>> typeScalarProviderCache =
            new StaticCache<>(this::createProvider, true);

    private final PropCache<ScalarProvider<?, ?>> propScalarProviderCache =
            new PropCache<>(this::createProvider, true);

    private final Map<Class<?>, ScalarProvider<?, ?>> customizedTypeScalarProviderMap;

    private final Map<ImmutableProp, ScalarProvider<?, ?>> customizedPropScalarProviderMap;

    private final Map<Class<?>, ObjectMapper> serializedTypeObjectMapperMap;

    private final Map<ImmutableProp, ObjectMapper> serializedPropObjectMapperMap;

    private final EnumType.Strategy defaultEnumStrategy;

    private final Dialect dialect;

    ScalarProviderManager(
            Map<Class<?>, ScalarProvider<?, ?>> customizedTypeScalarProviderMap,
            Map<ImmutableProp, ScalarProvider<?, ?>> customizedPropScalarProviderMap,
            Map<Class<?>, ObjectMapper> serializedTypeObjectMapperMap,
            Map<ImmutableProp, ObjectMapper> serializedPropObjectMapperMap,
            EnumType.Strategy defaultEnumStrategy,
            Dialect dialect
    ) {
        this.customizedTypeScalarProviderMap = new HashMap<>(customizedTypeScalarProviderMap);
        this.customizedPropScalarProviderMap = new HashMap<>(customizedPropScalarProviderMap);
        this.serializedTypeObjectMapperMap = new HashMap<>(serializedTypeObjectMapperMap);
        this.serializedPropObjectMapperMap = new HashMap<>(serializedPropObjectMapperMap);
        this.defaultEnumStrategy = defaultEnumStrategy;
        this.dialect = dialect;
    }

    public ScalarProvider<?, ?> getProvider(ImmutableProp prop) {
        return propScalarProviderCache.get(prop.toOriginal());
    }

    public ScalarProvider<?, ?> getProvider(Class<?> type) {
        return typeScalarProviderCache.get(type);
    }

    private ScalarProvider<?, ?> createProvider(ImmutableProp prop) {
        ScalarProvider<?, ?> provider = customizedPropScalarProvider(prop);
        if (provider != null) {
            return provider;
        }

        Serialized serialized = prop.getAnnotation(Serialized.class);
        if (serialized == null) {
            return typeScalarProviderCache.get(prop.getReturnClass());
        }
        return createJsonProvider(
                prop.getReturnClass(), 
                jacksonType(prop.getGenericType()),
                serializedPropObjectMapper(prop)
        );
    }

    @SuppressWarnings({"unchecked", "rawtypes"})
    private ScalarProvider<?, ?> createProvider(Class<?> type) {

        ScalarProvider<?, ?> provider = customizedTypeScalarProviderMap.get(type);
        if (provider != null) {
            return provider;
        }

        EnumType enumType = type.getAnnotation(EnumType.class);
        Serialized serialized = type.getAnnotation(Serialized.class);
        if (enumType != null && serialized != null) {
            throw new ModelException(
                    "Illegal type \"" +
                            type +
                            "\", it cannot be decorated by both @" +
                            EnumType.class.getName() +
                            " and @" +
                            Serialized.class.getName()
            );
        }
        if (enumType != null && !type.isEnum()) {
            throw new ModelException(
                "Illegal type \"" +
                    type +
                    "\", it cannot be decorated by @EnumType because it is not enum"
            );
        }
        if (enumType != null && enumType.value() == EnumType.Strategy.ORDINAL) {
            return newEnumByIntProvider((Class<Enum>)type);
        }
        if (enumType != null && enumType.value() == EnumType.Strategy.NAME) {
            return newEnumByStringProvider((Class<Enum>)type);
        }
        if (type.isEnum()) {
            if (defaultEnumStrategy == EnumType.Strategy.ORDINAL) {
                return newEnumByIntProvider((Class<Enum>)type);
            }
            return newEnumByStringProvider((Class<Enum>)type);
        }

        if (serialized != null) {
            return createJsonProvider(
                    type,
                    SimpleType.constructUnsafe(type),
                    serializedTypeObjectMapper(type)
            );
        }

        return null;
    }

    private <E extends Enum<E>> ScalarProvider<E, ?> newEnumByStringProvider(Class<E> enumType) {
        return ScalarProvider.enumProviderByString(enumType, it -> {
            for (E enumValue: enumType.getEnumConstants()) {
                Field enumField;
                try {
                    enumField = enumType.getField(enumValue.name());
                } catch (NoSuchFieldException ex) {
                    throw new AssertionError("Internal bug", ex);
                }
                EnumItem enumItem = enumField.getAnnotation(EnumItem.class);
                if (enumItem == null) {
                    break;
                }
                if (enumItem.ordinal() != -1) {
                    throw new ModelException(
                        "Illegal enum type \"" +
                            enumType.getName() +
                            "\", it is mapped by name, not ordinal, " +
                            "but ordinal of the @EnumItem of \"" +
                            enumField.getName() +
                            "\" is configured"
                    );
                }
                if (!enumItem.name().isEmpty()) {
                    it.map(enumValue, enumItem.name());
                }
            }
        });
    }

    private <E extends Enum<E>> ScalarProvider<?, ?> newEnumByIntProvider(Class<E> enumType) {
        return ScalarProvider.enumProviderByInt(enumType, it -> {
            for (E enumValue: enumType.getEnumConstants()) {
                Field enumField;
                try {
                    enumField = enumType.getField(enumValue.name());
                } catch (NoSuchFieldException ex) {
                    throw new AssertionError("Internal bug", ex);
                }
                EnumItem enumItem = enumField.getAnnotation(EnumItem.class);
                if (enumItem == null) {
                    break;
                }
                if (!enumItem.name().isEmpty()) {
                    throw new ModelException(
                        "Illegal enum type \"" +
                            enumType.getName() +
                            "\", it is mapped by ordinal, not name, " +
                            "but name of the @EnumItem of \"" +
                            enumField.getName() +
                            "\" is configured"
                    );
                }
                if (enumItem.ordinal() != -1) {
                    it.map(enumValue, enumItem.ordinal());
                }
            }
        });
    }

    @SuppressWarnings("unchecked")
    private ScalarProvider<?, ?> createJsonProvider(Class<?> type, JavaType javaType, ObjectMapper objectMapper) {
        return new ScalarProvider<Object, Object>(
                (Class<Object>) type,
                (Class<Object>) dialect.getJsonBaseType()
        ) {

            @Override
            public @NotNull Object toScalar(@NotNull Object sqlValue) throws Exception {
                if (!dialect.getJsonBaseType().isAssignableFrom(sqlValue.getClass())) {
                    throw new IllegalArgumentException(
                            "The type of the sql value is not the json base type \"" +
                                    dialect.getJsonBaseType().getName() +
                                    "\" of the dialect \"" +
                                    dialect.getClass().getName() +
                                    "\""
                    );
                }
                return dialect.baseValueToJson(sqlValue, javaType, objectMapper != null ? objectMapper : DEFAULT_OBJECT_MAPPER);
            }

            @Override
            public @NotNull Object toSql(@NotNull Object scalarValue) throws Exception {
                return dialect.jsonToBaseValue(scalarValue, objectMapper != null ? objectMapper : DEFAULT_OBJECT_MAPPER);
            }
        };
    }

    private ScalarProvider<?, ?> customizedPropScalarProvider(ImmutableProp prop) {
        ScalarProvider<?, ?> provider = customizedPropScalarProviderMap.get(prop);
        if (provider != null) {
            return provider;
        }
        for (ImmutableType superType : prop.getDeclaringType().getSuperTypes()) {
            ImmutableProp superProp = superType.getProps().get(prop.getName());
            if (superProp == null) {
                continue;
            }
            ScalarProvider<?, ?> superProvider = customizedPropScalarProvider(superProp);
            if (superProvider == null) {
                continue;
            }
            if (provider != null) {
                throw new ModelException(
                        "Cannot get the customized property scalar property of \"" +
                                prop +
                                "\", because there are conflict configurations in super properties"
                );
            }
            provider = superProvider;
        }
        return provider;
    }

    private ObjectMapper serializedTypeObjectMapper(Class<?> type) {
        ObjectMapper mapper = serializedTypeObjectMapperMap.get(type);
        if (mapper != null) {
            return mapper;
        }
        Class<?> superType = type.isInterface() ? Object.class : type.getSuperclass();
        if (superType != null) {
            mapper = serializedTypeObjectMapper(superType);
        }
        for (Class<?> superItfType : type.getInterfaces()) {
            ObjectMapper superMapper = serializedTypeObjectMapper(superItfType);
            if (superMapper == null) {
                continue;
            }
            if (mapper != null && mapper != superMapper) {
                throw new ModelException(
                        "Cannot get the serialized object mapper of \"" +
                                type.getName() +
                                "\", because there are conflict configurations in super types"
                );
            }
            mapper = superMapper;
        }
        return mapper;
    }

    private ObjectMapper serializedPropObjectMapper(ImmutableProp prop) {
        ObjectMapper mapper = serializedPropObjectMapperMap.get(prop);
        if (mapper != null) {
            return mapper;
        }
        for (ImmutableType superType : prop.getDeclaringType().getSuperTypes()) {
            ImmutableProp superProp = superType.getProps().get(prop.getName());
            if (superProp == null) {
                continue;
            }
            ObjectMapper superMapper = serializedPropObjectMapper(superProp);
            if (superMapper == null) {
                continue;
            }
            if (mapper != null && mapper != superMapper) {
                throw new ModelException(
                        "Cannot get the serialized object mapper of \"" +
                                prop +
                                "\", because there are conflict configurations in super properties"
                );
            }
            mapper = superMapper;
        }
        return serializedTypeObjectMapper(prop.getReturnClass());
    }

    private static JavaType jacksonType(Type type) {
        if (type instanceof ParameterizedType) {
            ParameterizedType parameterizedType = (ParameterizedType) type;
            Type rawType = parameterizedType.getRawType();
            if (!(rawType instanceof Class<?>) || !GENERIC_TYPES.contains(rawType)) {
                throw new IllegalArgumentException(
                        "Generic type must be one of " + GENERIC_TYPES
                );
            }
            Class<?> rawClass = (Class<?>) rawType;
            if (Map.class.isAssignableFrom(rawClass)) {
                return MapType.construct(
                        rawClass,
                        null,
                        null,
                        null,
                        jacksonType(parameterizedType.getActualTypeArguments()[0]),
                        jacksonType(parameterizedType.getActualTypeArguments()[1])
                );
            }
            return CollectionType.construct(
                    rawClass,
                    null,
                    null,
                    null,
                    jacksonType(parameterizedType.getActualTypeArguments()[0])
            );
        } else if (type instanceof Class<?>) {
            if (GENERIC_TYPES.contains(type)) {
                throw new IllegalArgumentException(
                        "\"" +
                                type +
                                "\" does not have generic arguments"
                );
            }
            Class<?> clazz = (Class<?>) type;
            if (clazz.isArray()) {
                return ArrayType.construct(
                        null,
                        null,
                        null,
                        jacksonType(clazz.getComponentType())
                );
            }
            return SimpleType.constructUnsafe(clazz);
        } else if (type instanceof WildcardType) {
            WildcardType wildcardType = (WildcardType) type;
            return jacksonType(wildcardType.getLowerBounds()[0]);
        } else if (type instanceof TypeVariable<?>){
            throw new IllegalArgumentException("type variable is not allowed");
        } else if (type instanceof GenericArrayType) {
            throw new IllegalArgumentException("generic array is not allowed");
        } else {
            throw new IllegalArgumentException("Unexpected type: " + type.getClass().getName());
        }
    }

    // `KotlinModule` may cause ClassNotFoundException, put it into this separated class
    private static class KotlinModuleRegister {
        public static ObjectMapper register(ObjectMapper mapper) {
            return mapper.registerModule(new KotlinModule.Builder().build());
        }
    }

    static {
        Set<Class<?>> genericTypes = new HashSet<>();
        genericTypes.add(Iterable.class);
        genericTypes.add(Collection.class);
        genericTypes.add(List.class);
        genericTypes.add(Set.class);
        genericTypes.add(SortedSet.class);
        genericTypes.add(NavigableSet.class);
        genericTypes.add(Map.class);
        genericTypes.add(SortedMap.class);
        genericTypes.add(NavigableMap.class);
        GENERIC_TYPES = genericTypes;

        ObjectMapper mapper = new ObjectMapper()
                .registerModule(new JavaTimeModule())
                .registerModule(new ImmutableModule());
        boolean hasKotlinModule;
        try {
            Class.forName("com.fasterxml.jackson.module.kotlin.KotlinModule");
            hasKotlinModule = true;
        } catch (ClassNotFoundException ex) {
            hasKotlinModule = false;
        }
        if (hasKotlinModule) {
            mapper = KotlinModuleRegister.register(mapper);
        }
        DEFAULT_OBJECT_MAPPER = mapper;
    }
}
