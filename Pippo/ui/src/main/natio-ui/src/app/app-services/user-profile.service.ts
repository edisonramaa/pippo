import {Injectable} from "@angular/core";
import {UserProfileModel} from "../models/user-profile.model";
import {FTBaseService} from "../core/lib/services/ft-base.service";
import {HttpService} from "../core/lib/services/http.service";


@Injectable()
export class UserProfileService extends FTBaseService {
  dataModel: UserProfileModel = new UserProfileModel();

  serviceApi: string = '/pippo/user';
  mapApi: string = "http://your-api-url";
  getMyProfileApi: string = this.serviceApi + '/profile';

  constructor(httpService: HttpService) {
    super(httpService);
  }

  getMyProfile() {
    return this.httpService.getRequest(this.getMyProfileApi);
  }

}
