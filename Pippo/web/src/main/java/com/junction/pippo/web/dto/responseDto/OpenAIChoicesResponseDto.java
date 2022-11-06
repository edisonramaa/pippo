package com.junction.pippo.web.dto.responseDto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OpenAIChoicesResponseDto {

    private String text;
    private Long index;
    private Object logprobs;
    @JsonProperty("finish_reason")
    private String finishReason;
}
