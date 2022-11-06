package com.junction.pippo.web.controller;

import com.junction.pippo.core.constant.WebResourceConstant;
import com.junction.pippo.core.model.ResponseObj;
import com.junction.pippo.web.dto.requestDto.AIChatbotRequestDto;
import com.junction.pippo.web.dto.requestDto.OpenAICommandRequestDto;
import com.junction.pippo.web.dto.responseDto.OpenAIDataResponse;
import com.junction.pippo.web.dto.responseDto.OpenAIResponse;
import com.junction.pippo.web.service.IAIChatbotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping(AIChatbotController.BASE_URL)
public class AIChatbotController {

    public static final String BASE_URL = WebResourceConstant.PIPPO.AI_CHATBOT;
    private final IAIChatbotService aiChatbotService;

    @Autowired
    public AIChatbotController(IAIChatbotService aiChatbotService) {
        this.aiChatbotService = aiChatbotService;
    }

    @PostMapping(WebResourceConstant.ChatbotManagement.SEND_COMMAND)
    public ResponseEntity<ResponseObj> sendChatbotCommand(@RequestBody @Valid AIChatbotRequestDto dto) {
        OpenAIDataResponse result = this.aiChatbotService.sendChatbotCommand(dto.getPrompt());

        return new ResponseEntity<>(new ResponseObj.ResponseObjBuilder().result(result).build(), HttpStatus.OK);
    }

}
