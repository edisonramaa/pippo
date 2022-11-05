package com.junction.pippo.web.service.impl;


import com.junction.pippo.core.exception.PippoException;
import com.junction.pippo.core.security.ImatraEncoder;
import com.junction.pippo.core.service.impl.CrudServiceImpl;
import com.junction.pippo.web.model.UserEntity;
import com.junction.pippo.web.repository.IUserRepository;
import com.junction.pippo.web.service.IUserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**

 */
@Transactional
@Service
public class UserServiceImpl extends CrudServiceImpl<UserEntity, Long> implements IUserService {

    private IUserRepository userRepository;
    private ImatraEncoder imatraEncoder;

    public UserServiceImpl(IUserRepository userRepository, ImatraEncoder imatraEncoder) {
        super(userRepository);
        this.userRepository = userRepository;
        this.imatraEncoder = imatraEncoder;
    }

    @Override
    public UserEntity save(UserEntity entity) {
        String encodedPassword = imatraEncoder.encrypt(entity.getPassword());
        entity.setPassword(encodedPassword);

        return super.save(entity);
    }

    @Override
    public UserEntity authenticate(UserEntity userEntity) {
        System.out.println("encoded password: " + imatraEncoder.encrypt("admin"));
        UserEntity userToAuthenticate = this.userRepository.findByEmail(userEntity.getEmail());
        if (userToAuthenticate != null) {
            if (this.imatraEncoder.match(userEntity.getPassword(), userToAuthenticate.getPassword())) {
                return userToAuthenticate;
            }
        }
        return null;
    }


    @Override
    public Boolean changePassword(String oldPassword, String newPassword, Long userId) {

        UserEntity umUserEntity = userRepository.findOne(userId);
        if (imatraEncoder.match(oldPassword, umUserEntity.getPassword())) {
            umUserEntity.setPassword(imatraEncoder.encrypt(newPassword));
            userRepository.update(umUserEntity);
            return true;
        }
        throw new PippoException("Old Password Didn't match.");
    }

    @Override
    public UserEntity getProfile(Long userId){
        UserEntity umUserEntity = userRepository.findOne(userId);
        if (umUserEntity != null){
            return umUserEntity;
        }
        throw new PippoException("Internal server error! User data not available");
    }


    @Override
    public UserEntity findByEmail(String email) {
        return this.userRepository.findByEmail(email);
    }


}
