package com.junction.pippo.core.accessControl.requestDto;

import com.junction.pippo.core.model.ModelBase;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UmUserLoginRequestDto extends ModelBase {
    private String userName;
    private String password;
}
