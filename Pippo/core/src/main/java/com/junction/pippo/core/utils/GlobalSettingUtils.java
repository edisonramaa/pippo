package com.junction.pippo.core.utils;

import java.util.HashMap;
import java.util.Map;

/**

 */
public class GlobalSettingUtils {

    public static final String IMAGE_UPLOAD_LOCATION = "IMAGE_UPLOAD_LOCATION";
    public static final String ROOT_UPLOAD_LOCATION = "ROOT_UPLOAD_LOCATION";
    public static final String QR_JOB_LOCATION = "QR_JOB_LOCATION";
    public static final String QR_SERVICE = "QR_SERVICE";

    private static Map<String, String> globalSettingMap = new HashMap<>();

    public static void setGlobalSettingMap(Map<String, String> systemResource) {
        globalSettingMap = systemResource;
    }

    public static String getGlobalSettingByKey(String key) {
        return globalSettingMap.get(key);
    }

    public static void put(String key, String value) {
        globalSettingMap.put(key, value);
    }
}
