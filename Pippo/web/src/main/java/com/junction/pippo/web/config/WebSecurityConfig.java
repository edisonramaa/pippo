package com.junction.pippo.web.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.session.SessionManagementFilter;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Bean(name = "appCrossFilter")
    public AppCorsFilter appCorsFilter() {
        return new AppCorsFilter();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and()
                .addFilterBefore(appCorsFilter(), SessionManagementFilter.class) // custom AppCorsFilter
                .csrf().disable()
                .anonymous().disable()
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .antMatchers("/auth").permitAll();

    }

}
