package org.babyfish.jimmer.error;

import org.jetbrains.annotations.NotNull;

import java.util.Map;

public abstract class CodeBasedException extends RuntimeException {

    @NotNull
    public abstract Enum<?> getCode();

    @NotNull
    public abstract Map<String, Object> getErrorFields();

    public ExportedError getExportedError() {
        Enum<?> code = getCode();
        return new ExportedError(
                familyName(code.getClass().getSimpleName()),
                code.name(),
                getErrorFields()
        );
    }

    private static String familyName(String name) {
        boolean prevLower = false;
        int size = name.length();
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < size; i++) {
            char c = name.charAt(i);
            if (Character.isUpperCase(c)) {
                if (prevLower) {
                    builder.append("_");
                }
                prevLower = false;
                builder.append(c);
            } else {
                prevLower = true;
                builder.append(Character.toUpperCase(c));
            }
        }
        return builder.toString();
    }
}
