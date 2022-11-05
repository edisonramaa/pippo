package com.junction.pippo.core.exception;

import lombok.Getter;
import lombok.Setter;

/**

 */
@Getter
@Setter
public class PippoException extends RuntimeException {
    private Object data;

    public PippoException(String message) {
        this(message, null);
    }

    public PippoException(String message, Object data) {
        super(message);
        this.data = data;
    }
}
