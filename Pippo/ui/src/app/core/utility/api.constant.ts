/**
 .
 */
export class ApiConstant {

  public static API_ROOT_URL: string = 'http://localhost:8080';

  public static BASE_API: string = ApiConstant.API_ROOT_URL + '/api/v1';
  public static PIPPO: string = '/pippo';
  public static IMAGE_DISPLAY: string = ApiConstant.BASE_API + ApiConstant.PIPPO + "/display/";


}
