import {Component, OnInit, ViewChild} from '@angular/core';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material';
import {Router} from "@angular/router";
import {LOCATION_POINT_DETAILS, PIPPO, NATURE_LOCATION} from "../../core/utility/navigation-url";
import { UserProfileService } from 'src/app/app-services/user-profile.service';

@Component({
  selector: 'app-explore-trails',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  constructor(
              private _router: Router,
              private userProfileService: UserProfileService,

  ) {

  }

  ngOnInit() {
    this.initUser();
  }

  openLocationPointDetails(){
    let finalUrl = "/"+PIPPO+  "/" + LOCATION_POINT_DETAILS;
    this._router.navigateByUrl(finalUrl);
  }

  initUser(){

  }

}