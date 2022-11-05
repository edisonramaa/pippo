import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuggestionsComponent} from './suggestions.component';
import {CustomMaterialModule} from "../../core/module/CustomMaterialModule";
import {SuggestionsRoutingModule} from "./suggestions-routing.module";

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    SuggestionsRoutingModule
  ],
  declarations: [SuggestionsComponent],
  providers: [

  ],
})
export class SuggestionsModule { }
