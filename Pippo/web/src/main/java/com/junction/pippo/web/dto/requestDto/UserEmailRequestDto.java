package com.junction.pippo.web.dto.requestDto;


import com.junction.pippo.core.model.ModelBase;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserEmailRequestDto extends ModelBase {
    private String email;
}
