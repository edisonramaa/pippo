package com.junction.pippo.web.config;

import com.junction.pippo.core.constant.WebResourceConstant;
import com.junction.pippo.core.utils.StringUtils;
import com.junction.pippo.core.utils.TokenUtils;
import com.junction.pippo.web.util.IPippoToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;


public class AuthenticationHandlerInterceptor extends HandlerInterceptorAdapter {


    private static List<String> authorizationFreeuriList = new ArrayList<>();

    static {
        authorizationFreeuriList.add(WebResourceConstant.UserManagement.UM_AUTHENTICATE);
        authorizationFreeuriList.add(WebResourceConstant.UserManagement.SIGN_UP);
        authorizationFreeuriList.add("/user/create");
        authorizationFreeuriList.add("/user/profile");
        authorizationFreeuriList.add("/ai-chatbot");
        authorizationFreeuriList.add("/upload");
        authorizationFreeuriList.add("/display");
        authorizationFreeuriList.add(WebResourceConstant.UserManagement.EMAIL);

    }

    @Autowired
    private IPippoToken pippoToken;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
       /* //Do not delete the code
        if (request.getMethod().equalsIgnoreCase("OPTIONS")) {
            return true;
        }
        return true;*/
        String uri = request.getRequestURI();
        String accessToken;
        //String origin = request.getHeader("Origin");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "*");
        response.setHeader("Access-Control-Allow-Headers", "*");
        System.out.println("request Uri = " + uri);
        if (isAuthFreeUri(uri)) {
            return true;
        }
        accessToken = request.getHeader(WebResourceConstant.AUTHORIZATION_HEADER);

        if (StringUtils.isNull(accessToken) && !isAuthFreeUri(uri)) {

            throw new Exception("Unauthorized access!!");
        }

        if (StringUtils.isNotNull(accessToken)) {
            TokenUtils.setTokenModel(pippoToken.parseToken(accessToken));
            System.out.println("TokenUtils.getTokenModel() = " + TokenUtils.getTokenModel().toString());
        }


        return true;
    }

    private boolean isAuthFreeUri(String uri) {
        if (StringUtils.isNull(uri)) return false;
        for (String authFreeUri : authorizationFreeuriList) {
            if (uri.contains(authFreeUri)) {
                return true;
            }
        }
        return false;
    }


}
