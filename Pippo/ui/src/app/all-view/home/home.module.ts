import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {CustomMaterialModule} from "../../core/module/CustomMaterialModule";
import {ExploreTrailsService} from "../../app-services/explore-trails.service";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomMaterialModule
  ],
  declarations: [HomeComponent],
  providers: [
    ExploreTrailsService
  ],
})
export class HomeModule { }
