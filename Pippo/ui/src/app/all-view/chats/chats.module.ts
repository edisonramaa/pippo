import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChatsComponent} from './chats.component';
import {CustomMaterialModule} from "../../core/module/CustomMaterialModule";
import {ChatsRoutingModule} from "./chats-routing.module";
import {ChatService} from "../../app-services/chat.service";

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    ChatsRoutingModule,
  ],
  declarations: [ChatsComponent],
  providers: [
    ChatService
  ],
})
export class ChatsModule { }
