package com.junction.pippo.core.utils;

/**

 */

/**
 * This class handles all utility functions related to String
 */
public class StringUtils {
    /**
     * checks whether input string is null (empty) or not.
     *
     * @param inputString
     * @return - true, if given string is null or empty, otherwise false.
     */
    public static boolean isNull(String inputString) {
        if (inputString == null) {
            return true;
        }
        if (inputString.trim().isEmpty() || inputString.trim().equalsIgnoreCase("NULL")) {
            return true;
        }
        return false;
    }

    /**
     * checks whether input string is not null.
     *
     * @param inputString
     * @return - true, if given string is not null or empty, otherwise false.
     */
    public static boolean isNotNull(String inputString) {
        return !isNull(inputString);
    }


}
