import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiConstant} from "../../utility/api.constant";

/**

 */
@Injectable()
export class HttpService {
  baseApi: string = ApiConstant.BASE_API;
  reverseGeoLocationApiPart1 = 'https://api.opencagedata.com/geocode/v1/json?key=4a6d990afb604104879735748a5627fa&q=';
  reverseGeoLocationApiPart2 = '&pretty=1&no_annotations=1';
  constructor(private _http: HttpClient) {
  }

  getRequest(data) {
    return this._http.get(this.baseApi + data).toPromise()
    // .map((response: HttpResponse) => response))
      .catch(this.catchError);
  }

  postRequest(apiEndPoint, data) {
    return this._http.post(this.baseApi + apiEndPoint, data)
      .toPromise()
      .catch(this.catchError);
  }

  deleteRequest(data) {
    return this._http.delete(this.baseApi + data).toPromise()
    // .map((response: HttpResponse) => response.json())
      .catch(this.catchError);
  }

  putRequest(apiEndPoint, data) {
    return this._http.put(this.baseApi + apiEndPoint, data).toPromise()
    // .map((response: HttpResponse) => response.json())
      .catch(this.catchError);

  }

  downloadFile(downloadUrl: string) {
    return this._http
      .get(downloadUrl, {
        responseType: 'blob',
      });
  }

  catchError(error: HttpErrorResponse) {
    console.log(error);
    return Observable.throw(JSON.stringify(error)).toPromise();
  }

  getLocation(lat, lng) {
    return this._http.get(this.reverseGeoLocationApiPart1+ lat+"+"+lng+this.reverseGeoLocationApiPart2).toPromise()
    // .map((response: HttpResponse) => response))
      .catch(this.catchError);
  }

}
