package com.junction.pippo.core.accessControl.requestDto;

import com.junction.pippo.core.model.ModelBase;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UmChangePasswordRequestDto extends ModelBase {
    private String oldPassword;
    private String newPassword;
    private String confirmPassword;
}
