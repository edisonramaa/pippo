import {CanLoad, Route, Router} from "@angular/router";
import {SessionStorageService} from "./session-storage.service";
import {Injectable} from "@angular/core";
import {PIPPO} from "../../utility/navigation-url";
import {EventService} from "./event.service";

/**

 */
@Injectable()
export class AuthGuard implements CanLoad {
  constructor(
    private _sessionStorageService: SessionStorageService,
    private _router: Router,
    private _eventService: EventService
  ) {
  }

  canLoad(route: Route): boolean {
    let baseHref = window.location.origin;
    let url: string = route.path;
    console.log('Url:' + url);
    if (this._sessionStorageService.getToken()) {
      return true;
    } else {
      // window.location.href = baseHref + "/login";
      this._router.navigate(['login'], {queryParams: {returnUrl: "/" + PIPPO + "/" + 'home'}});

    }
    return false;
  }


}
