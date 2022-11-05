import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {CustomMaterialModule} from "../core/module/CustomMaterialModule";
import {HttpClientModule} from "@angular/common/http";
import {SessionStorageService} from "../core/lib/services/session-storage.service";
import {HttpService} from "../core/lib/services/http.service";
import {LoginService} from "../app-services/login.service";

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
      CustomMaterialModule,
      HttpClientModule
    ],
  declarations: [LoginComponent],
  providers: [HttpService, SessionStorageService, LoginService]
})
export class LoginModule {
}
