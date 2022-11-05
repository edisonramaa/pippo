package com.junction.pippo.core.utils;

import com.junction.pippo.core.model.TokenModel;
import org.springframework.stereotype.Component;

/**

 */
@Component
public class TokenUtils {

    private static TokenModel pippoTokenModel;

    public static TokenModel getTokenModel() {
        return pippoTokenModel;
    }

    public static void setTokenModel(final TokenModel pippoTokenModel) {
        TokenUtils.pippoTokenModel = pippoTokenModel;
    }
}
