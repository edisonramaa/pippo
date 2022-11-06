import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {EXPLORE_TRAILS, PIPPO, NATURE_LOCATION} from "../../core/utility/navigation-url";
import {ExploreTrailsService} from "../../app-services/explore-trails.service";
import {ResponseModel} from "../../core/lib/model/response.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selected:string = 'none';
  placeNames = [];

  products = [{
    title: 'VR glasses',
    description:
      'Enjoy! The Oculus Quest 2 is a self-contained unit capable of tracking controller, hand, and headset movement without further kit, as did its predecessor. The inside-out tracking on the Quest 2 manages to keep up exceptionally well, and without fear of falling out of eyeline with the sensors',
    category: 'games',
    rent_price: 300,
    currency: 'Eur',
    count: 1,
    days: 1,
    owner: {
      name: 'Hanna',
      phoneNumber: '+358414141414',
      send_tracking_link_sms: true,
      address: 'Capellan Puistotie 25A',
    },
  },
  {
    title: 'PS5',
    description: 'Sony Playstation 5',
    category: 'games',
    rent_price: 500,
    currency: 'Eur',
    count: 1,
    days: 1,
    owner: {
      name: 'Hanna',
      phoneNumber: '+358414141414',
      send_tracking_link_sms: true,
      address: 'Capellan Puistotie 25A',
    },
  },
  {
    title: 'MacBook Pro 16 M1',
    description: 'Apples best laptop!',
    category: 'games',
    rent_price: 2500,
    currency: 'Eur',
    count: 1,
    days: 1,
    owner: {
      name: 'Hanna',
      phoneNumber: '+358414141414',
      send_tracking_link_sms: true,
      address: 'Capellan Puistotie 25A',
    }
  }];

  constructor(
    private _router: Router,
    private _exploreService: ExploreTrailsService
  ) {}

  ngOnInit() {}

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
