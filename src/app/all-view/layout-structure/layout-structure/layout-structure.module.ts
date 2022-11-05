import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {CustomMaterialModule} from "../../../core/module/CustomMaterialModule";



@NgModule({
    imports: [
        CommonModule,
        CustomMaterialModule
    ],
    declarations: [
      FooterComponent,
      HeaderComponent
    ],
    providers: [
    ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]

})
export class LayoutStructureModule {
}
