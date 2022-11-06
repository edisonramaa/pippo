import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyBookingsComponent} from './my-bookings.component';
import {MyBookingsRoutingModule} from "./my-bookings-routing.module";
import {CustomMaterialModule} from "../../core/module/CustomMaterialModule";

@NgModule({
  imports: [
    CommonModule,
    MyBookingsRoutingModule,
    CustomMaterialModule
  ],
  declarations: [MyBookingsComponent],
  providers: [

  ],
})
export class MyBookingsModule { }
