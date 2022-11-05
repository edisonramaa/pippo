/**
 .
 */
export class ApiConstant {

  public static ROOT_URL = 'http://localhost:4200';
  public static API_ROOT_URL: string = 'http://localhost:8080';
  public static API_ADMIN_ROOT_URL: string = 'http://localhost:8080/api';
  //public static API_ROOT_URL: string = 'http://40.127.195.143:8080/';
  //public static API_ADMIN_ROOT_URL: string = 'http://40.127.195.143:8080/api';

  public static BASE_API: string = ApiConstant.API_ROOT_URL + '/api';
  public static PIPPO: string = '/pippo';
  public static IMAGE_DISPLAY: string = ApiConstant.BASE_API + ApiConstant.PIPPO + "/display/";


}
