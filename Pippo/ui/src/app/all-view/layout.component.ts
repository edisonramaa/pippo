import {Component, OnInit, ViewChild} from "@angular/core";
import {Router} from "@angular/router";
import {SessionStorageService} from "../core/lib/services/session-storage.service";
import {CHANGE_PASS, PIPPO, PROFILE_URL} from "../core/utility/navigation-url";

import {MatSidenav} from "@angular/material";
import {UserProfileModel} from "../models/user-profile.model";
import {UserProfileService} from "../app-services/user-profile.service";
import {LoginService} from "../app-services/login.service";
import {ResponseModel} from "../core/lib/model/response.model";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild("sidenav")
  sideNav: MatSidenav;
  userProfileModel: UserProfileModel;
  showLoggedInMenus: boolean  = false;

  constructor(private _router: Router, private _userProfile: UserProfileService, private _loginService:LoginService, private _sessionStorageService: SessionStorageService) {
    this.userProfileModel = new UserProfileModel();
  }

  ngOnInit() {
    this.initForm();
    this.showLoggedInMenus = !!this._sessionStorageService.getToken();
  }
  initForm() {
    this._userProfile.getMyProfile().then((res: ResponseModel) => {
      if (res.responseStatus) {
        this.userProfileModel = res.result;
      }else {
        this.userProfileModel = new UserProfileModel();
      }
    });
  }
  openUserProfile() {
    let finalUrl = "/" + PIPPO + "/" + PROFILE_URL;
    this.sideNav.toggle();
    this.sideNav.autoFocus = false;
    this._router.navigateByUrl(finalUrl);

  }
  changePwd(){
    let finalUrl = "/" + PIPPO + "/" + CHANGE_PASS;
    this.sideNav.toggle();
    this.sideNav.autoFocus = false;
    this._router.navigateByUrl(finalUrl);
  }
  logout() {
    this._loginService.logout();
  }
  login() {
    this._loginService.login();
  }
}
