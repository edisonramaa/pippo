import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SessionStorageService} from "../core/lib/services/session-storage.service";
import {ResponseModel} from "../core/lib/model/response.model";
import {ActivatedRoute, Router} from "@angular/router";
import {EMAIL_REGEX} from "../core/lib/services/custom-validator.service";
import {LoginModel} from "../models/login.model";
import {LoginService} from "../app-services/login.service";
import {ADMIN_URL, MAIN_URL, PIPPO} from "../core/utility/navigation-url";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel;
  loginFormGroup: FormGroup;
  disableLoginBtn: boolean;
  showErrMsg: string;
  returnUrl: string;

  constructor(
    private _loginService: LoginService,
    private _sessionStograge: SessionStorageService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.loginModel = new LoginModel();
    this.disableLoginBtn = false;
  }

  ngOnInit() {
    this.initForm();
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || "/" + PIPPO;

  }

  initForm() {
    this.loginFormGroup = new FormGroup({});
    this.loginFormGroup = new FormGroup({
      email: new FormControl(this.loginModel.email, {
        validators: [Validators.required, Validators.pattern(EMAIL_REGEX)],
        updateOn: 'blur'
      }),
      password: new FormControl(this.loginModel.password, {
        validators: [Validators.required]
      }),
    });
  }

  onLogin() {
    this.showErrMsg = "";
    if (this.loginFormGroup.valid) {
      this.disableLoginBtn = true;
      this.loginModel = this.loginFormGroup.value;
      this._loginService.authenticate(this.loginModel).then((res: ResponseModel) => {
        if (res.responseStatus) {
          this.loginFormGroup.reset();
          this.disableLoginBtn = false;
          this._sessionStograge.setIsAdmin(res.result.isAdmin);
          this._sessionStograge.setToken(res.result.token);
          this._sessionStograge.setEmail(res.result.email);
          this._sessionStograge.setUsername(res.result.username);
          let finalUrl = null;
          finalUrl = this.returnUrl;
          this._router.navigateByUrl(finalUrl);
          this.disableLoginBtn = false;
        } else {
          this.showErrMsg = "Sorry! Your email or password is incorrect.";
          this.disableLoginBtn = false;
        }

      });
    }
  }


}
