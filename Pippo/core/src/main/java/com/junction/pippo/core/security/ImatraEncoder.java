package com.junction.pippo.core.security;


public interface ImatraEncoder {

    /**
     * This method is used to encrypt password
     *
     * @param password
     * @return encrypted password
     */
    String encrypt(String password);

    /**
     * This method is used to match password
     *
     * @param rawPassword
     * @param encodedPassword
     * @return true if match otherwise false
     */
    Boolean match(String rawPassword, String encodedPassword);
}
