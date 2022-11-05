import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExploreTrailsComponent} from './explore-trails.component';
import {ExploreTrailsRoutingModule} from "./explore-trails-routing.module";
import {CustomMaterialModule} from "../../core/module/CustomMaterialModule";
import {ExploreTrailsService} from "../../app-services/explore-trails.service";

@NgModule({
  imports: [
    CommonModule,
    ExploreTrailsRoutingModule,
    CustomMaterialModule
  ],
  declarations: [ExploreTrailsComponent],
  providers: [
    ExploreTrailsService
  ],
})
export class ExploreTrailsModule { }
