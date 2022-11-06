import {Injectable} from "@angular/core";
import {UserProfileModel} from "../models/user-profile.model";
import {FTBaseService} from "../core/lib/services/ft-base.service";
import {HttpService} from "../core/lib/services/http.service";


@Injectable()
export class ProductService extends FTBaseService {
  dataModel: {};

  serviceApi: string = '/pippo/nature-locations';


  constructor(httpService: HttpService) {
    super(httpService);
  }

  getProductList() {
    return this.httpService.getRequestExternal("http://localhost:8090/api/products");
  }


}
