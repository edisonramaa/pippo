package com.junction.pippo.web.util;


import com.junction.pippo.core.model.TokenModel;
import com.junction.pippo.web.model.UserEntity;


public interface IPippoToken {
    /**
     * This method is used to generate token
     *
     * @param userEntity which contain system user information
     * @return token
     */
    String generateToken(UserEntity userEntity);

    /**
     * This method  is used to parse token
     *
     * @param token
     * @return TokenModel object
     */
    TokenModel parseToken(final String token);
}
