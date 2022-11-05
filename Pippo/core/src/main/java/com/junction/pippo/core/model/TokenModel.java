package com.junction.pippo.core.model;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class TokenModel extends ModelBase {

    private Long userId;

    private String email;

    private String userLocation;

    private String userIp;

    private String originCountry;

}
