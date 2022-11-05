import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionStorageService} from "../services/session-storage.service";

/**

 */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  //locationUrl = "https://ipvigilante.com/json";
  constructor(private _sessionStorageService: SessionStorageService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /** DO NOT REMOE THIS **/
    let authToken = this._sessionStorageService.getToken();
    req = req.clone({
      setHeaders: {
        authorization: authToken !== null ? authToken : "",

      }
    });

    return next.handle(req);
  }


}
