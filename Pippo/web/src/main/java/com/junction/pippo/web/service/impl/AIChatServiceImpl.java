package com.junction.pippo.web.service.impl;

import com.junction.pippo.web.controller.AIChatbotController;
import com.junction.pippo.web.dto.responseDto.OpenAIDataResponse;
import com.junction.pippo.web.dto.responseDto.OpenAIResponse;
import com.junction.pippo.web.service.IAIChatbotService;
import com.junction.pippo.web.service.IRestAPIWrapperService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class AIChatServiceImpl implements IAIChatbotService {

    @Value("${api.openapi-server.authorization}")
    private String authorization;

    private final IRestAPIWrapperService restAPIWrapperService;

    public AIChatServiceImpl(IRestAPIWrapperService restAPIWrapperService) {
        this.restAPIWrapperService = restAPIWrapperService;
    }

    @Override
    public OpenAIDataResponse sendChatbotCommand(String prompt) {
        return this.restAPIWrapperService.sendCommand(prompt, authorization);
    }
}
