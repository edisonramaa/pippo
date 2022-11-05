package com.junction.pippo.core.controller;

import com.junction.pippo.core.constant.WebResourceConstant;
import com.junction.pippo.core.model.ResponseObj;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

/**

 */
public abstract class RestTemplateControllerBase<Dto> {
    protected String serviceURI;
    private RestTemplate restTemplate;

    public RestTemplateControllerBase(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @PostMapping(WebResourceConstant.CREATE)
    public ResponseEntity<ResponseObj> create(@RequestBody @Valid Dto dto) {
        HttpEntity<Dto> requestHttpEntity = new HttpEntity<>(dto);
        ResponseEntity<ResponseObj> pippoResponse = restTemplate.exchange(this.getServiceURI() + WebResourceConstant.CREATE, HttpMethod.POST, requestHttpEntity, ResponseObj.class);
        return pippoResponse;
    }

    @PutMapping(WebResourceConstant.UPDATE)
    public ResponseEntity<ResponseObj> update(@RequestBody @Valid Dto dto) {
        HttpEntity<Dto> requestHttpEntity = new HttpEntity<>(dto);
        ResponseEntity<ResponseObj> pippoResponse = restTemplate.exchange(this.getServiceURI() + WebResourceConstant.UPDATE, HttpMethod.PUT, requestHttpEntity, ResponseObj.class);
        return pippoResponse;
    }

    @DeleteMapping(WebResourceConstant.DELETE)
    public ResponseEntity<ResponseObj> delete(@PathVariable Long id) {
        Map<String, Long> pathVariableMap = new HashMap<>();
        pathVariableMap.put("id", id);
        ResponseEntity<ResponseObj> pippoResponse = restTemplate.exchange(this.getServiceURI() + WebResourceConstant.DELETE, HttpMethod.DELETE, null, ResponseObj.class, pathVariableMap);
        return pippoResponse;
    }

    @GetMapping(WebResourceConstant.GET)
    public ResponseEntity<ResponseObj> get(@PathVariable Long id) {
        ResponseObj pippoResponse = restTemplate.getForObject(this.getServiceURI() + WebResourceConstant.GET, ResponseObj.class, id);
        return new ResponseEntity<>(pippoResponse, HttpStatus.OK);
    }

    @GetMapping(WebResourceConstant.GET_ALL)
    public ResponseEntity<ResponseObj> getAll() {
        ResponseObj pippoResponse = restTemplate.getForObject(this.getServiceURI() + WebResourceConstant.GET_ALL, ResponseObj.class);
        return new ResponseEntity<>(pippoResponse, HttpStatus.OK);
    }

    protected abstract String getServiceURI();
}
