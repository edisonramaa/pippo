import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {CustomMaterialModule} from "../../core/module/CustomMaterialModule";
import {ProfileRoutingModule} from "./profile-routing.module";
import { UserProfileService } from 'src/app/app-services/user-profile.service';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileComponent],
  providers: [
    UserProfileService
  ],
})
export class ProfileModule { }
