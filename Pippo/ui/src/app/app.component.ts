import { Component } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material";
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

  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar, private _sessionStorage: SessionStorageService) {
  }
  ngOnInit() {
    this.pwaFunctions();
  }

  /**
   * This method notifies the user about new version of application
   */

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


}
