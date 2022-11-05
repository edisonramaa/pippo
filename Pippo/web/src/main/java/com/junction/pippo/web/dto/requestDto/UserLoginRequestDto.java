package com.junction.pippo.web.dto.requestDto;


import com.junction.pippo.core.model.ModelBase;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserLoginRequestDto extends ModelBase {
    private String email;
    private String password;
}
