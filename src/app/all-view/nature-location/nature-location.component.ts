import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LOCATION_POINT_DETAILS, PIPPO} from "../../core/utility/navigation-url";
import {ExploreTrailsService} from "../../app-services/explore-trails.service";
import {ResponseModel} from "../../core/lib/model/response.model";
import {LocationPointsModel} from "../../models/location-points.model";
import {MyTripsService} from "../../app-services/my-trips.service";
import {LocationModel} from "../../models/location.model";




@Component({
  selector: 'app-explore-trails',
  templateUrl: './nature-location.component.html',
  styleUrls: ['./nature-location.component.scss']
})
export class NatureLocationComponent implements OnInit {

  locationPoints: LocationPointsModel[] = [];
  placeName:string;
  locationModel: LocationModel = new LocationModel();
  showMsgBox:boolean = false;
  constructor(
              private _router: Router,
              private route: ActivatedRoute,
              private _exploreService: ExploreTrailsService,
              private _myTripService: MyTripsService

  ) {
    this.route.params.subscribe( params => {
      if(params){
        this.placeName = params.place;
        this.getLocationPoints(this.placeName);
      }
    });
  }

  ngOnInit() {

  }

  openLocationPointDetails(name){
    let finalUrl = "/"+PIPPO+  "/" + LOCATION_POINT_DETAILS + "/" + this.placeName + "/"+ name;
    this._router.navigateByUrl(finalUrl);
  }

  getLocationPoints(placeName) {
    this._exploreService.getLocationPointsByZoneName(placeName).then((res:ResponseModel)=>{
        if(res.responseStatus){
          this.locationPoints = res.result;
          console.log(this.locationPoints);
        } else {
          this.locationPoints = [];
        }
    });
  }

  getLocationName(lat, lng, locationPoint) {
    this._exploreService.getLocationByLatAndLng(lat,lng).then(res=>{
      if(res['status']==200){
        let result = [];
        result = res['results'];
        let loc = result[0];
        let component = loc['components'];
        locationPoint['attraction'] = component['attraction'];

      }
    })
  }

  onSubmit() {
      console.log(this.locationModel);
      for(let i=0; i<this.locationPoints.length; i++) {
        let locationPoint = this.locationPoints[i];
        let newLocationPointArr: LocationPointsModel[] = [];
        if(locationPoint.checked) {
          newLocationPointArr.push(locationPoint);
        }
        this.locationModel.locationPointList = newLocationPointArr;
      }

      this._myTripService.saveLocation(this.locationModel).then((res:ResponseModel) =>{
          if(res.responseStatus){
            this.locationModel = new  LocationModel();
            this.clearCheckBox();
            alert("Your trip has been saved successfully.");
          }
      });
  }

  clearCheckBox(){
    for(let i=0; i<this.locationPoints.length; i++) {
      let locationPoint = this.locationPoints[i];
      if(locationPoint.checked) {
        locationPoint.checked = false;
      }

    }
  }

}
