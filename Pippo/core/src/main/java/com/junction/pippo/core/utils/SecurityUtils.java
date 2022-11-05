package com.junction.pippo.core.utils;

/**

 */
public class SecurityUtils {

    private static final String CHARACTER = "abcEefHghijklmABCyDFzGsUI";
    private static final String NUMBER = "0123456789";

    public static String generateRandomString(int characterLength, int numericLength) {

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < characterLength; i++) {
            int ndx = (int) (Math.random() * CHARACTER.length());
            sb.append(CHARACTER.charAt(ndx));
        }
        for (int i = 0; i < numericLength; i++) {
            int ndx = (int) (Math.random() * NUMBER.length());
            sb.append(NUMBER.charAt(ndx));
        }
        return sb.toString();
    }


}
