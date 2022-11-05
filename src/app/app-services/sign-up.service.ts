import {Injectable} from "@angular/core";
import {FTBaseService} from "../core/lib/services/ft-base.service";
import {HttpService} from "../core/lib/services/http.service";


@Injectable()
export class SignUpService extends FTBaseService {
  dataModel: {};

  serviceApi: string = '/pippo/user';
  signUpUrl: string = '/sign-up';

  constructor(httpService: HttpService) {
    super(httpService);

  }

  signUp(data) {
    return this.httpService.postRequest(this.serviceApi + this.signUpUrl, data);
  }

  findByEmail(email: string) {
    return this.httpService.postRequest(this.serviceApi + "/email", {email: email});
  }


}
