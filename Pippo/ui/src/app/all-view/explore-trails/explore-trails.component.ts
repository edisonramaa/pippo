import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {EXPLORE_TRAILS, PIPPO, NATURE_LOCATION} from "../../core/utility/navigation-url";
import {ExploreTrailsService} from "../../app-services/explore-trails.service";
import {ResponseModel} from "../../core/lib/model/response.model";




@Component({
  selector: 'app-explore-trails',
  templateUrl: './explore-trails.component.html',
  styleUrls: ['./explore-trails.component.scss']
})
export class ExploreTrailsComponent implements OnInit {
  selected:string = 'none';
  placeNames = [];
  constructor(
              private _router: Router,
              private _exploreService: ExploreTrailsService
  ) {

  }

  ngOnInit() {

  }

  openNatureLocation(placeName: string){
    let finalUrl = "/"+PIPPO+  "/" + NATURE_LOCATION +"/" + placeName;
    this._router.navigateByUrl(finalUrl);
  }

  onRegionChange(event: any) {
    if(event.value!=='helsinki') {
      this.placeNames=[];
      return;
    }
    this._exploreService.getAllNatureLocations(event.value).then((res:ResponseModel)=>{
        if(res.responseStatus){
          this.placeNames = res.result;
        } else {
          this.placeNames=[];
        }
    });
  }


}
