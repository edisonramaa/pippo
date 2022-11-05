package com.junction.pippo.core.model;

import org.apache.commons.lang3.builder.ReflectionToStringBuilder;

import java.io.Serializable;

/**

 * <p>
 * Base Class for every class related to domain object, entity object response object, DTO etc.
 */
public abstract class ModelBase implements Serializable {

    @Override
    public String toString() {
        return ReflectionToStringBuilder.toString(this);
    }
}
