import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpRoutingModule} from "./sign-up-routing.module";
import {CustomMaterialModule} from "../core/module/CustomMaterialModule";
import {HttpClientModule} from "@angular/common/http";
import {SessionStorageService} from "../core/lib/services/session-storage.service";
import {HttpService} from "../core/lib/services/http.service";
import {SignUpComponent} from "./sign-up.component";
import {SignUpService} from "../app-services/sign-up.service";

@NgModule({
  imports: [
    CommonModule,
    SignUpRoutingModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  declarations: [SignUpComponent],
  providers: [HttpService, SessionStorageService, SignUpService]
})
export class SignUpModule {
}
