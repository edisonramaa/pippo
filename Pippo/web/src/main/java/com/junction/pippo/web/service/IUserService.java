package com.junction.pippo.web.service;


import com.junction.pippo.core.service.ICrudService;
import com.junction.pippo.web.model.UserEntity;

public interface IUserService extends ICrudService<UserEntity, Long> {
    UserEntity authenticate(UserEntity userEntity);

    Boolean changePassword(String oldPassword, String newPassword, Long userId);

    UserEntity getProfile(Long id);
    UserEntity findByEmail(String email);
}
