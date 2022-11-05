import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {LOCATION_POINT_DETAILS, PIPPO, NATURE_LOCATION} from "../../core/utility/navigation-url";

@Component({
  selector: 'app-explore-trails',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {


  constructor(
              private _router: Router,

  ) {

  }

  ngOnInit() {

  }

  openLocationPointDetails(){
    let finalUrl = "/"+PIPPO+  "/" + LOCATION_POINT_DETAILS;
    this._router.navigateByUrl(finalUrl);
  }


}
