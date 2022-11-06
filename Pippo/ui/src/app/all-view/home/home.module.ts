import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from "./home-routing.module";
import {CustomMaterialModule} from "../../core/module/CustomMaterialModule";
import {ProductService} from "../../app-services/product.service";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomMaterialModule
  ],
  declarations: [HomeComponent],
  providers: [
    ProductService
  ],
})
export class HomeModule { }
