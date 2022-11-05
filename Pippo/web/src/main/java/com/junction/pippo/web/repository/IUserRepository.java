package com.junction.pippo.web.repository;


import com.junction.pippo.core.repository.ICrudRepository;
import com.junction.pippo.web.model.UserEntity;

/**

 */
public interface IUserRepository extends ICrudRepository<UserEntity, Long> {
    UserEntity findByEmail(String email);

}
