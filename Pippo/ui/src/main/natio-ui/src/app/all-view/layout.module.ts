import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LayoutRoutingModule} from "./layout-routing.module";
import {LayoutComponent} from "./layout.component";
import {CustomMaterialModule} from "../core/module/CustomMaterialModule";
import {SessionStorageService} from "../core/lib/services/session-storage.service";
import {LayoutStructureModule} from "./layout-structure/layout-structure/layout-structure.module";
import {UserProfileService} from "../app-services/user-profile.service";
import {LoginService} from "../app-services/login.service";

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CustomMaterialModule,
    LayoutStructureModule
  ],
  declarations: [LayoutComponent],
  providers: [ UserProfileService, LoginService, SessionStorageService]
})
export class LayoutModule {
}
