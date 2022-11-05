import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiConstant} from "../../core/utility/api.constant";
import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";
import {ChatModel} from "../../app-models/chat.model";
import {SessionStorageService} from "../../core/lib/services/session-storage.service";
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
  channel: string;
  chatMsgList: ChatModel []=[];

  private serverUrl = ApiConstant.API_ROOT_URL + '/socket';
  private stompClient;

  constructor(
              private _router: Router,
              private _sessionStorageService: SessionStorageService,
              private route:ActivatedRoute,
              private _chatService: ChatService

  ) {


  }

  ngOnInit() {
    this.route.params.subscribe( params => {

      if(params){
        this.email = this._sessionStorageService.getEmail();
        this.username = this._sessionStorageService.getUsername();
        this._sessionStorageService.setChannel(params.channelName);
        console.log("email add: ", this.email);
        this.channel = params.channelName;
        this.initWebSocketConnection();
        this.getList();
      }
    });

  }

  initWebSocketConnection() {
    let that = this;
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);

    ws.onclose = function () {
      console.debug("Trying to reconnect...")
      setTimeout(() => {
        that.initWebSocketConnection();
      }, 5000);

    };

    ws.onopen = function() {
      console.log('Sockjs --- ---open');
      ws.send('test');
    };

    ws.onmessage = function(e) {
      console.log('message', e.data);
      ws.close();
    };

    this.stompClient.connect({}, function (frame) {
        console.log("Connected.......");
        console.log("channel Name: ", that.channel);
        that.stompClient.subscribe("/order/"+ that.channel, (message) => {
          if (message.body) {
            let msg = JSON.parse(message.body);
            that.chatMsgList.push(msg);
            console.log(msg.message);
          }
        });
      }, function (message) {
        if (message.includes('Whoops')) {
          setTimeout(() => {
            that.initWebSocketConnection();
          }, 5000);

        }
      }
    );

  }

  sendMessage(message) {
    if(message) {
      let sendMsg:ChatModel = new ChatModel();
      sendMsg.message = message;
      sendMsg.email = this.email;
      sendMsg.username=this.username;
      sendMsg.channel = this.channel;
      sendMsg.sentTime = JSON.stringify(new Date().getTime());
      this.stompClient.send("/app/send/order", {}, JSON.stringify(sendMsg));
      this._chatService.create(sendMsg).then((res:ResponseModel)=>{
        if(res.responseStatus){
          console.log("msg created");
        }
      });
      this.message ="";
    }

  }

  getList(){
    this._chatService.getMsgsList(this.channel).then((res:ResponseModel)=>{
      if(res.responseStatus){
        this.chatMsgList = res.result;
      } else {
        this.chatMsgList=[];
      }
    });
  }


}
