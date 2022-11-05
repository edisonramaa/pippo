package com.junction.pippo.core.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonUtil {
    public static JsonNode getJsonObjectFromString(String jsonString) {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode actualObj = null;
        try {
            actualObj = mapper.readTree(jsonString);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return actualObj;
    }
}
