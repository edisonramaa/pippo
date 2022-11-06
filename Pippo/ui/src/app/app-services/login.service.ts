import {Injectable} from "@angular/core";
import {FTBaseService} from "../core/lib/services/ft-base.service";
import {HttpService} from "../core/lib/services/http.service";
import {SessionStorageService} from "../core/lib/services/session-storage.service";
import {MAIN_URL, PIPPO} from "../core/utility/navigation-url";


@Injectable()
export class LoginService extends FTBaseService {
  dataModel: {};

  serviceApi: string = '/user';
  authUrl: string = '/auth';
  changePwdUrl: string = '/chhangepassword';

  locationUrl = "http://ip-api.com/json";

  constructor(httpService: HttpService,
              private _sessionStorageService: SessionStorageService,
  ) {
    super(httpService);

  }

  authenticate(data) {
    return this.httpService.postRequest(this.serviceApi + this.authUrl, data);
  }

  logout() {
    this._sessionStorageService.clearSession();
    let baseHref = window.location.origin;
    let finalUrl = baseHref + "/" + PIPPO + "/" + MAIN_URL;
    window.location.href = finalUrl;
  }

  login() {
    let baseHref = window.location.origin;
    let loginUrl = baseHref + "/login";
    window.location.href = loginUrl;
  }

  changePassword(data) {
    return this.httpService.postRequest(this.serviceApi + this.changePwdUrl, data);
  }



}
