package com.junction.pippo.web.dto.responseDto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OpenAIUsageResponseDto {

    @JsonProperty("prompt_tokens")
    private Long promptTokens;

     @JsonProperty("completion_tokens")
     private Long completionTokens;

     @JsonProperty("total_tokens")
     private Long totalTokens;
}
