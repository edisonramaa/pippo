package com.junction.pippo.web.service;

import com.junction.pippo.web.dto.responseDto.OpenAIDataResponse;
import com.junction.pippo.web.dto.responseDto.OpenAIResponse;

public interface IAIChatbotService {

    OpenAIDataResponse sendChatbotCommand(String prompt);
}
