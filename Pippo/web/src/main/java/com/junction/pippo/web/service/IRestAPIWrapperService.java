package com.junction.pippo.web.service;

import com.junction.pippo.core.model.ResponseObj;
import com.junction.pippo.web.dto.responseDto.OpenAIDataResponse;
import com.junction.pippo.web.dto.responseDto.OpenAIResponse;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.util.UriComponentsBuilder;

public interface IRestAPIWrapperService {

    ResponseEntity<OpenAIResponse> call(UriComponentsBuilder builder, HttpMethod httpMethod, HttpEntity<?> requestHttpEntity, Object... pathParams);

    OpenAIDataResponse sendCommand(String prompt, String authorization);
}
