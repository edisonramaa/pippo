package com.junction.pippo.web.repository.impl;


import com.junction.pippo.core.repository.impl.CrudRepositoryImpl;
import com.junction.pippo.web.model.QUserEntity;
import com.junction.pippo.web.model.UserEntity;
import com.junction.pippo.web.repository.IUserRepository;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.stereotype.Repository;

/**

 */
@Repository
public class UserRepositoryImpl extends CrudRepositoryImpl<UserEntity, Long> implements IUserRepository {
    public UserRepositoryImpl() {
        super(UserEntity.class);
    }

    @Override
    public UserEntity findByEmail(String email) {
        QUserEntity qUserEntity = QUserEntity.userEntity;
        JPAQueryFactory jpaQueryFactory = new JPAQueryFactory(entityManager);
        UserEntity userEntity = jpaQueryFactory
                .selectFrom(qUserEntity)
                .where(qUserEntity.email.toLowerCase().eq(email.toLowerCase()))
                .fetchOne();
        return userEntity;
    }


}
