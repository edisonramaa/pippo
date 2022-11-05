import { Component } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material";
import * as SockJS from "sockjs-client";
import * as Stomp from "stompjs";
import {ApiConstant} from "./core/utility/api.constant";
import {SessionStorageService} from "./core/lib/services/session-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pippo';
  promptEvent: any;
  channels =[
    'hiking-in-finland',
    'Leivonmäki-Pipponal-Park',
    'Nuuksio-Pipponal-Park',
    'Oulanka-Pipponal-Park',
    'Patvinsuo-Pipponal-Park'
  ];
  private serverUrl = ApiConstant.API_ROOT_URL + '/socket';
  private stompClient;

  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar, private _sessionStorage: SessionStorageService) {
  }
  ngOnInit() {
    this.notifyNewVersion();
    this.pwaFunctions();
    this.initWebSocketConnection();
  }

  /**
   * This method notifies the user about new version of application
   */
  notifyNewVersion(){
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    }
  }

  pwaFunctions() {
    let noInternetSnack;

    window.addEventListener('online', () => {
      noInternetSnack.dismiss();
    });

    window.addEventListener('offline', () => {
      noInternetSnack = this.snackBar.open('No Internet connection', 'Ok');
    });

    if (this.swUpdate.isEnabled) {
      // this.snackBar.open('Service Workers enabled', 'OK', {duration: 3000});
      console.log("Server Workers Enabled.");
    }

    //ask user to install pwa application
    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault();

      this.promptEvent = event;
      const snackInstall = this.snackBar.open('Do you want to install the application to your device ?', 'Install', {duration: 6000});

      snackInstall.onAction().subscribe(() => {
        this.promptEvent.prompt();
        this.promptEvent.userChoice.then(choiceResult => {
          if (choiceResult.outcome === 'accepted') {
            this.snackBar.open('PWA install accepted', 'OK', {duration: 3000});
          } else {
            this.snackBar.open('PWA install dismissed', 'OK', {duration: 3000});
          }
        });
      });
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

    ws.onmessage = function(e) {
      console.log('message', e.data);
      ws.close();
    };

    this.stompClient.connect({}, function (frame) {
        console.log("Connected.......");
        for(let channel of that.channels) {
          that.stompClient.subscribe("/order/"+ channel, (message) => {
            if (message.body) {
              let msg = JSON.parse(message.body);
              if(msg.channel!== that._sessionStorage.getChannel() && msg.username!== that._sessionStorage.getUsername()){
                that.snackBar.open('Channel - '+msg.channel +' user - '+ msg.username+ ': '+ msg.message, 'OK', {duration: 5000, verticalPosition: 'top'});
                console.log(msg.message);
              }

            }
          });
        }

      }, function (message) {
        if (message.includes('Whoops')) {
          setTimeout(() => {
            that.initWebSocketConnection();
          }, 5000);

        }
      }
    );

  }

}
