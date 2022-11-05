import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyTripsComponent} from './my-trips.component';
import {MyTripsRoutingModule} from "./my-trips-routing.module";
import {CustomMaterialModule} from "../../core/module/CustomMaterialModule";

@NgModule({
  imports: [
    CommonModule,
    MyTripsRoutingModule,
    CustomMaterialModule
  ],
  declarations: [MyTripsComponent],
  providers: [

  ],
})
export class MyTripsModule { }
