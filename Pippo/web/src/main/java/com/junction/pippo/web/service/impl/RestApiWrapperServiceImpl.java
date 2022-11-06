package com.junction.pippo.web.service.impl;

import com.junction.pippo.core.constant.WebResourceConstant;
import com.junction.pippo.core.exception.PippoException;
import com.junction.pippo.web.dto.requestDto.OpenAICommandRequestDto;
import com.junction.pippo.web.dto.responseDto.OpenAIDataResponse;
import com.junction.pippo.web.dto.responseDto.OpenAIResponse;
import com.junction.pippo.web.service.IRestAPIWrapperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import java.util.function.Supplier;

@Service
public class RestApiWrapperServiceImpl implements IRestAPIWrapperService {

    private static final String MODEL = "text-davinci-002";
    private static final String HUMAN = "\\n\\nHUMAN:";
    private static final String START = "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\\n\\nHuman:";
    private static final String AI = "\\n\\nAI:";
    private static final Double TEMPERATURE = 0.9;
    private static final Long MAX_TOKENS = 150L;
    private static final Long TOP_P = 1L;
    private static final Double FREQUENCY_PENALTY = 0.0;
    private static final Double PRESENCE_PENALTY = 0.6;
    @Autowired
    private RestTemplate restTemplate;

    @Value("${api.openapi-server.url}")
    private String baseUrl;

    Logger logger = LoggerFactory.getLogger(RestApiWrapperServiceImpl.class);

    @Override
    public ResponseEntity<OpenAIResponse> call(UriComponentsBuilder builder, HttpMethod httpMethod,
                                            HttpEntity<?> requestHttpEntity, Object... pathParams) {
        ResponseEntity<OpenAIResponse> response = null;
        if (pathParams != null) {
            response = restTemplate.exchange(builder.build().toString(), httpMethod, requestHttpEntity,
                    OpenAIResponse.class, pathParams);
        } else {
            response = restTemplate.exchange(builder.build().encode().toUri(), httpMethod, requestHttpEntity,
                    OpenAIResponse.class);
        }

        return response;
    }

    private OpenAIResponse callPostReq(String endpoint, Object dto, String authorization) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(this.baseUrl + endpoint);
        HttpEntity<?> entity = new HttpEntity<>(dto, getHeaders(authorization));
        ResponseEntity<OpenAIResponse> response  = call(builder, HttpMethod.POST, entity,null);

        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            return response.getBody();
        }
        if (response.getBody() != null) {
            throw new PippoException("Empty response from the AI engine!");
        }
        throw new PippoException("Something went wrong! Contact your administrator");
    }

    @Override
    public OpenAIDataResponse sendCommand(String prompt, String authorization) {
        String[] stops = new String[2];
        stops[0] = HUMAN;
        stops[1] = AI;
        OpenAICommandRequestDto dto = new OpenAICommandRequestDto();
        dto.setModel(MODEL);
        dto.setFrequencyPenalty(FREQUENCY_PENALTY);
        dto.setMaxTokens(MAX_TOKENS);
        dto.setPresencePenalty(PRESENCE_PENALTY);
        dto.setTemperature(TEMPERATURE);
        dto.setTopP(TOP_P);
        dto.setStop(stops);
        String promptFinal = prompt.contains(START) ? prompt : START + prompt;
        dto.setPrompt(promptFinal + AI);
        Supplier<Object> func = () -> callPostReq(WebResourceConstant.APIManagement.SEND_COMMAND, dto,
                authorization);
        OpenAIResponse openAIResponse = (OpenAIResponse)func.get();
        OpenAIDataResponse response = new OpenAIDataResponse();
        response.setResponse(openAIResponse.getChoices().get(0).getText());
        response.setPreviousConversation(promptFinal);
        return response;
    }


    private HttpHeaders getHeaders(String authorizationToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);
        headers.set("Content-Type", MediaType.APPLICATION_JSON_VALUE);
        if (authorizationToken != null) {
            headers.set("Authorization", "Bearer " + authorizationToken);
        }
        return headers;
    }
}
