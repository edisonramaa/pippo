package com.junction.pippo.web.dto.requestDto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class OpenAICommandRequestDto {
    private String model;
    private String prompt;
    private Double temperature;
    @JsonProperty("max_tokens")
    private Long maxTokens;
    @JsonProperty("top_p")
    private Long topP;
    @JsonProperty("frequency_penalty")
    private Double frequencyPenalty;
    @JsonProperty("presence_penalty")
    private Double presencePenalty;
    private String[] stop;

}
