import {HttpService} from "./http.service";

/**

 */
export class FTBaseService {
  dataModel = {};
  // roleModel:RoleModel = new RoleModel();
  buttonRole: string;
  /** example: '/role-module' */
    // protected serviceApi:string;

  protected serviceApi: string;

  protected baseApi: string;

  constructor(protected httpService: HttpService) {
    this.buttonRole = "addButton";

  }

  getList() {
    return this.httpService.getRequest(this.serviceApi + '/list');
  }

  getListWithPage(currentPage: number, pageSize: number) {
    return this.httpService.getRequest(this.serviceApi + `/list/${currentPage}/${pageSize}`);
  }

  getAll(currentPage, pageSize, data) {
    return this.httpService.postRequest(this.serviceApi + '/search/' + currentPage + '/' + pageSize, data);
  }

  getByID(id: string) {
    return this.httpService.getRequest(this.serviceApi + '/' + id);
  }

  add(data) {
    return this.httpService.postRequest(this.serviceApi + '/create', data);
  }

  search(searchParam, currentPage, pageSize) {
    return this.httpService.getRequest(this.serviceApi + `/search/${searchParam}/${currentPage}/${pageSize}`);
  }


  update(data) {
    return this.httpService.putRequest(this.serviceApi + '/update', data);
  }

  delete(id: string) {
    return this.httpService.deleteRequest(this.serviceApi + '/' + id);
  }


  getListByCountry(country: String) {
    return this.httpService.getRequest(this.serviceApi + `/list/country/${country}`);
  }


}
