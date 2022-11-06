package com.junction.pippo.web.dto.responseDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class OpenAIDataResponse {

    private String response;
    private String previousConversation;
}
