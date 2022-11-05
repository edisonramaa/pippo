package com.junction.pippo.core.accessControl.requestDto;


import com.junction.pippo.core.model.RequestDtoBase;
import lombok.Getter;
import lombok.Setter;

/**

 */
@Getter
@Setter
public class UmRoleRequestDto extends RequestDtoBase {
    Integer level;
    String description;
}
