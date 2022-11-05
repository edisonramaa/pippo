package com.junction.pippo.core.security.impl;

import com.junction.pippo.core.security.ImatraEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;


@Component
public class BCryptEncoderImpl implements ImatraEncoder {

    private PasswordEncoder passwordEncoder;

    public BCryptEncoderImpl(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public String encrypt(String password) {
        return passwordEncoder.encode(password);
    }


    @Override
    public Boolean match(String rawText, String encodedPassword) {
        return passwordEncoder.matches(rawText, encodedPassword);
    }
}
