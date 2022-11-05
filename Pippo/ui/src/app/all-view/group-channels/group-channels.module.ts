import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMaterialModule} from "../../core/module/CustomMaterialModule";
import {GroupChannelsRoutingModule} from "./group-channels-routing.module";
import {GroupChannelsComponent} from "./group-channels.component";

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    GroupChannelsRoutingModule
  ],

  declarations: [GroupChannelsComponent],
  exports:[GroupChannelsComponent],
  providers: [

  ],
})
export class GroupChannelsModule { }
