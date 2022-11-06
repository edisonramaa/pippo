package com.junction.pippo.core.constant;

public class WebResourceConstant {


    /**
     * Common api end points
     */
    public static final String BASE_API = "/api";
    public static final String CREATE = "/create";
    public static final String UPDATE = "/update";
    public static final String DELETE = "/{id}";
    public static final String GET_ALL = "/list";
    public static final String GET_ALL_WITH_PAGE = "/list/{currentPage}/{pageSize}";
    public static final String GET = "/{id}";

    //For file
    public static final String FILE = "/file";

    public static final String DISPLAY_FILE = "/display/{type}/{fileName}";
    public static final String FILE_DOWNLOAD = "/download";
    public static final String SEARCH = "/search/{currentPage}/{pageSize}";
    public static final String UPLOAD = "/upload";


    public static final String LOGGER = "/logger/{status}";
    //header Constants
    public static final String FORM_HEADER = "form";
    public static final String APPLICATION_HEADER = "application";
    public static final String AUTHORIZATION_HEADER = "authorization";
    public static final String IP = "ip";
    public static final String COUNTRY = "country";
    public static final String LAT = "lat";
    public static final String LON = "lon";

    public interface APIManagement {
        String SEND_COMMAND = "/v1/completions";
    }

    /**
     * Module wise interface for api end points
     */
    public interface UserManagement {
        String UM_AUTHENTICATE = "/auth";
        String CHANGE_PASSWORD = "/chhangepassword";
        String EMAIL = "/email";
        String PROFILE = "/profile";
        String SIGN_UP = "/sign-up";

    }

    public interface ChatbotManagement {
        String SEND_COMMAND = "/command";
    }
    public interface PIPPO {
        String PIPPO_BASE = BASE_API + "/v1";
        String USER = PIPPO_BASE + "/user";

        String AI_CHATBOT = PIPPO_BASE + "/ai-chatbot";
    }

}
