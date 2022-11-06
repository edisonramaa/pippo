import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
// import {ApiConstant} from "../../core/utility/api.constant";
// import * as Stomp from "stompjs";
// import * as SockJS from "sockjs-client";
import {ChatModel} from "../../app-models/chat.model";
// import {SessionStorageService} from "../../core/lib/services/session-storage.service";
import {ChatService} from "../../app-services/chat.service";
import {ResponseModel} from "../../core/lib/model/response.model";

@Component({
  selector: 'app-explore-trails',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit  {
  message:string;
  email:string;
  username:string;
  channel: string = 'Your Buddy Pippo';
  prevConv: string;
  lastAiMessage: string;
  chatMsgList: ChatModel [] = [{
    prompt: 'Hi, I am Pippo, your virtual friend! You can talk to me about your struggles and I will do my best to help you!',
    user: 1
  }];

  // private serverUrl = ApiConstant.API_ROOT_URL + '/socket';
  // private stompClient;

  constructor(
    private _router: Router,
    // private _sessionStorageService: SessionStorageService,
    private route:ActivatedRoute,
    private _chatService: ChatService
  ){}

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('chat-logs'))){
      this.chatMsgList = JSON.parse(localStorage.getItem('chat-logs'));
      this.prevConv = localStorage.getItem('prev-conv');
      this.lastAiMessage = localStorage.getItem('last-ai-message');
    }
  }

  sendMessage() {
    if(this.message) {
      let sendMsg : ChatModel = new ChatModel();
      sendMsg.prompt = this.message;
      sendMsg.user = 0;

      this.chatMsgList.push(sendMsg);

      let convCalc = (this.prevConv === null || this.prevConv == undefined) ? this.message : this.prevConv + '\\n\\nAI:' + this.lastAiMessage + '\\n\\nHuman:' + this.message;

      this._chatService.sendMsg(convCalc).then((res:ResponseModel)=>{
        if(res.responseStatus){
          this.chatMsgList.push({
            prompt: res.result.response.trim(),
            user: 1
          });
          this.prevConv = res.result.previousConversation;
          this.lastAiMessage = res.result.response.trim();
        }
      });
      localStorage.setItem('chat-logs', JSON.stringify(this.chatMsgList));
      localStorage.setItem('prev-conv', this.prevConv);
      localStorage.setItem('last-ai-message', this.lastAiMessage);
      this.message = "";
    }
  }
}
