package com.junction.pippo.core.accessControl.responseDto;

import com.junction.pippo.core.model.ResponseDtoBase;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UmRoleResponseDto extends ResponseDtoBase {
    Integer level;
    String description;
}
