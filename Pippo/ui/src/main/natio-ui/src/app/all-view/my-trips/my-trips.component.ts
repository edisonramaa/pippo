import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {LOCATION_POINT_DETAILS, PIPPO} from "../../core/utility/navigation-url";




@Component({
  selector: 'app-explore-trails',
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.scss']
})
export class MyTripsComponent implements OnInit {


  constructor(private _router: Router,
  ) {

  }

  ngOnInit() {

  }

  openLocationPointDetails(){
    let finalUrl = "/"+PIPPO+  "/" + LOCATION_POINT_DETAILS;
    this._router.navigateByUrl(finalUrl);
  }


}
