package com.junction.pippo.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Configuration;


@SpringBootApplication(
        exclude = {DataSourceAutoConfiguration.class},
        scanBasePackages = {"com.junction"}
)
@EnableCaching
@Configuration
public class PippoWebStarter {

    public static void main(String[] args) {
        SpringApplication.run(PippoWebStarter.class, args);
    }



}



