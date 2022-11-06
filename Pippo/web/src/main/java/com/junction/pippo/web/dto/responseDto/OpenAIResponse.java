package com.junction.pippo.web.dto.responseDto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class OpenAIResponse {

    private String id;
    private String object;
    private Long created;
    private String model;
    private List<OpenAIChoicesResponseDto> choices;
    private OpenAIUsageResponseDto usage;

}
