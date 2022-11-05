import {Injectable} from "@angular/core";
import {UserProfileModel} from "../models/user-profile.model";
import {FTBaseService} from "../core/lib/services/ft-base.service";
import {HttpService} from "../core/lib/services/http.service";


@Injectable()
export class ExploreTrailsService extends FTBaseService {
  dataModel: {};

  serviceApi: string = '/pippo/nature-locations';
  mapApi: string = "http://your-api-url";
  getAllMainZonesApi: string = this.serviceApi + '/get-all';
  getAllLocationPointApi: string = this.serviceApi + '/get-location-point/';
  getLocationDetailsApi: string = this.serviceApi + "/location-point-details/";


  constructor(httpService: HttpService) {
    super(httpService);
  }

  getAllNatureLocations(zone:string) {
    return this.httpService.getRequest(this.getAllMainZonesApi);
  }

  getLocationPointsByZoneName(zoneName:string) {
    return this.httpService.getRequest(this.getAllLocationPointApi + zoneName);
  }

  getLocationPointsDetails(zoneName: string, trailName: string) {
    return this.httpService.getRequest(this.getLocationDetailsApi + zoneName + "/" + trailName);
  }

  getLocationByLatAndLng(lat,lng) {
    return this.httpService.getLocation(lat,lng);
  }

}
