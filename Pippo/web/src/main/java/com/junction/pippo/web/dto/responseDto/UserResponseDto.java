package com.junction.pippo.web.dto.responseDto;

import com.junction.pippo.core.model.ResponseDtoBase;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserResponseDto extends ResponseDtoBase {
    private String name;
    private String email;

}
