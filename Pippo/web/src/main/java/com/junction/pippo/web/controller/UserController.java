package com.junction.pippo.web.controller;

import com.junction.pippo.core.constant.WebResourceConstant;
import com.junction.pippo.core.controller.ControllerBase;
import com.junction.pippo.core.exception.PippoException;
import com.junction.pippo.core.model.ResponseObj;
import com.junction.pippo.core.model.TokenModel;
import com.junction.pippo.core.utils.TokenUtils;
import com.junction.pippo.core.utils.impl.BeanMapperImpl;
import com.junction.pippo.web.dto.requestDto.*;
import com.junction.pippo.web.dto.responseDto.UserResponseDto;
import com.junction.pippo.web.model.UserEntity;
import com.junction.pippo.web.service.IUserService;
import com.junction.pippo.web.util.IPippoToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;


@RestController
@RequestMapping(UserController.BASE_URL)
public class UserController extends ControllerBase {
    public static final String BASE_URL = WebResourceConstant.PIPPO.USER;
    private IUserService userService;
    private IPippoToken emoneyToken;

    @Autowired
    public UserController(IUserService userService, IPippoToken emoneyToken) {
        super(userService, new BeanMapperImpl(UserEntity.class, UserRequestDto.class), new BeanMapperImpl(UserEntity.class, UserResponseDto.class));
        this.userService = userService;
        this.emoneyToken = emoneyToken;
    }

    @PostMapping(WebResourceConstant.UserManagement.CHANGE_PASSWORD)
    public ResponseEntity<ResponseObj> changePassword(@RequestBody @Valid ChangePasswordRequestDto changePasswordRequestDto) {
        if (changePasswordRequestDto.getNewPassword().equals(changePasswordRequestDto.getConfirmPassword())) {
            TokenModel tokenModel = TokenUtils.getTokenModel();
            this.userService.changePassword(changePasswordRequestDto.getOldPassword(), changePasswordRequestDto.getNewPassword(), tokenModel.getUserId());
        } else {
            throw new PippoException("Confirmed Password Didn't match With New Password");
        }

        return new ResponseEntity<>(new ResponseObj.ResponseObjBuilder().message("Password has been Changed Successfully.").build(), HttpStatus.OK);
    }

    @GetMapping(WebResourceConstant.UserManagement.PROFILE)
    public ResponseEntity<ResponseObj> getUserProfile() {
        TokenModel tokenModel = TokenUtils.getTokenModel();

        if (tokenModel == null) {
            throw new PippoException("Your session has been expired. Please sign in and try again");
        }
        UserEntity entities = userService.getProfile(tokenModel.getUserId());
        return new ResponseEntity<>(new ResponseObj.ResponseObjBuilder().result(resBeanMapper.mapToDTO(entities)).message("Success").build(), HttpStatus.OK);
    }

    @PostMapping(WebResourceConstant.UserManagement.UM_AUTHENTICATE)
    public ResponseEntity<ResponseObj> authenticateUser(@RequestBody @Valid UserLoginRequestDto userLoginRequestDto) {
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(userLoginRequestDto.getEmail());
        userEntity.setPassword(userLoginRequestDto.getPassword());
        UserEntity authenticUser = this.userService.authenticate(userEntity);

        if (authenticUser == null) {
            throw new PippoException("Sorry!! Your email address or  password doesn't match");
        }


        String token = emoneyToken.generateToken(authenticUser);
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("token", token);
        responseMap.put("email",userEntity.getEmail());
        responseMap.put("username", authenticUser.getName());
        return new ResponseEntity<>(new ResponseObj.ResponseObjBuilder().result(responseMap).build(), HttpStatus.OK);
    }

    @PostMapping(WebResourceConstant.UserManagement.SIGN_UP)
    public ResponseEntity<ResponseObj> changePassword(@RequestBody @Valid UserRequestDto userRequestDto) {
        UserEntity userEntity = (UserEntity) reqBeanMapper.mapToEntity(userRequestDto);
        userService.save(userEntity);
        return new ResponseEntity<>(new ResponseObj.ResponseObjBuilder().message("Your account has been created. Please go to login page to sign in.").build(), HttpStatus.OK);
    }

    @PostMapping(WebResourceConstant.UserManagement.EMAIL)
    public ResponseEntity<ResponseObj> verifyUserByEmail(@RequestBody @Valid UserEmailRequestDto userEmailRequestDto) {
        UserEntity userEntity = this.userService.findByEmail(userEmailRequestDto.getEmail());

        return new ResponseEntity<>(new ResponseObj.ResponseObjBuilder().result(userEntity != null).build(), HttpStatus.OK);
    }

}
