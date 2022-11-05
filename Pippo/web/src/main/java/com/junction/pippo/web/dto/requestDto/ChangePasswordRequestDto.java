package com.junction.pippo.web.dto.requestDto;


import com.junction.pippo.core.model.ModelBase;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ChangePasswordRequestDto extends ModelBase {
    private String oldPassword;
    private String newPassword;
    private String confirmPassword;
}
