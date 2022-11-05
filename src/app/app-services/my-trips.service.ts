import {Injectable} from "@angular/core";
import {UserProfileModel} from "../models/user-profile.model";
import {FTBaseService} from "../core/lib/services/ft-base.service";
import {HttpService} from "../core/lib/services/http.service";


@Injectable()
export class MyTripsService extends FTBaseService {
  dataModel: {};

  serviceApi: string = '/pippo/location';

  constructor(httpService: HttpService) {
    super(httpService);
  }

  saveLocation(location) {
    return this.httpService.postRequest(this.serviceApi + "/save-trips",location);
  }

  getMytrips(zoneName:string) {
    return this.httpService.getRequest(this.serviceApi);
  }

  getLocationByLatAndLng(lat,lng) {
    return this.httpService.getLocation(lat,lng);
  }

}
