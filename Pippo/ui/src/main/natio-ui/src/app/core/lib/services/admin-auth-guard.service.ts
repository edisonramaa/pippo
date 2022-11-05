import {CanLoad, Route, Router} from "@angular/router";
import {SessionStorageService} from "./session-storage.service";
import {Injectable} from "@angular/core";
import {ADMIN_URL} from "../../utility/navigation-url";

/**

 */
@Injectable()
export class AdminAuthGuardService implements CanLoad {
  constructor(
    private _sessionStorageService: SessionStorageService,
    private _router: Router,
  ) {
  }

  canLoad(route: Route): boolean {
    let baseHref = window.location.origin;
    let url: string = route.path;
    console.log('Url:' + url);
    if (this._sessionStorageService.getToken() && this._sessionStorageService.getIsAdmin() === "true") {
      return true;
    } else {
      // window.location.href = baseHref + "/login";
      this._router.navigate(['login'], {queryParams: {returnUrl: "/" + ADMIN_URL + "/" + url}});

    }
    return false;
  }


}
