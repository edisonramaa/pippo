package com.junction.pippo.core.model;

import lombok.Getter;
import lombok.Setter;

/**

 */
@Getter
@Setter
public class ResponseObj extends ModelBase {
    private Object result;
    private String message;
    private Boolean responseStatus;
    private Object page;

    public ResponseObj() {
    }

    private ResponseObj(ResponseObjBuilder responseObjBuilder) {
        this.result = responseObjBuilder.result;
        this.message = responseObjBuilder.message;
        this.responseStatus = responseObjBuilder.responseStatus;
        this.page = responseObjBuilder.page;
    }

    public static class ResponseObjBuilder {
        private Object result;
        private String message;
        private Boolean responseStatus = true;
        private Object page;

        public ResponseObjBuilder() {
        }

        public ResponseObjBuilder result(Object result) {
            this.result = result;
            return this;
        }

        public ResponseObjBuilder message(String message) {
            this.message = message;
            return this;
        }

        public ResponseObjBuilder responseStatus(Boolean responseStatus) {
            this.responseStatus = responseStatus;
            return this;
        }

        public ResponseObjBuilder page(Object page) {
            this.page = page;
            return this;
        }

        public ResponseObj build() {
            return new ResponseObj(this);
        }

    }


}
