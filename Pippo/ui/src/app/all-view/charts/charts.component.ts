import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HighchartsService} from "./charts.service";
import * as Highcharts from 'highcharts';
import {ExploreTrailsService} from "../../app-services/explore-trails.service";
import {LocationPointsModel} from "../../models/location-points.model";
import {ResponseModel} from "../../core/lib/model/response.model";


@Component({
  selector: 'app-output-graph',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, AfterContentInit {

  @ViewChild('charts') public chartEl: ElementRef;
  locationPoint: LocationPointsModel = new LocationPointsModel();
  placeName: string;
  trailName: string;

  constructor(private highcharts: HighchartsService,
              private _router: Router,
              private route: ActivatedRoute,
              private _exploreService: ExploreTrailsService) {
    this.route.params.subscribe( params => {
      if(params){
        console.log(params.place);
        console.log(params.trail);
        this.placeName = params.place;
        this.trailName = params.trail;
        this.getLocationDetails(this.placeName, this.trailName);
      }
    });
  }
  ngOnInit(){

  }

  elevationData = [
    [ 0, 225],
    [ 1, 226],
    [ 2, 228],
    [ 3, 228],
    [ 4, 28],
    [ 5, 229],
    [ 6, 23],
    [ 7, 234],
    [ 8, 21],
    [ 9, 236],
    [ 10, 260],
    [ 11, 232],
    [ 12, 64],
    [ 13, 223],
    [ 14, 218],
    [ 15, 75],
    [ 16, 207],
    [ 17, 89],
    [ 18, 198],
    [ 19, 196],
    [ 20, 197],
    [ 21, 200],
    [ 22, 205],
    [ 23, 52],
  ];

  myOptions = {
    chart: {
      type: 'area',
      zoomType: 'x',
      panning: true,
      panKey: 'shift',
      scrollablePlotArea: {
        minWidth: 300
      }
    },

    caption: {
      text: 'This chart contains the hourly information about the number of people visiting this location point'
    },

    title: {
      text: 'Visit Finland'
    },

    credits: {
      enabled: false
    },
      xAxis: {
        labels: {
          format: '{value} hr'
        },
        minRange: 5,
        title: {
          text: 'Distance'
        },
        accessibility: {}
      },

      yAxis: {
        startOnTick: true,
        endOnTick: false,
        maxPadding: 0.35,
        title: {
          text: null
        },
        labels: {
          format: '{value}'
        }
      },

      tooltip: {
        headerFormat: 'Hours: {point.x:.1f} <br>',
        pointFormat: '{point.y}',
        shared: true
      },

      legend: {
        enabled: false
      },

      series: [{
        accessibility: {
          keyboardNavigation: {
            enabled: false
          }
        },
        data: this.elevationData,
        lineColor: Highcharts.getOptions().colors[1],
        color: Highcharts.getOptions().colors[2],
        fillOpacity: 0.5,
        name: 'Elevation',
        marker: {
          enabled: false
        },
        threshold: null

    }],
  };

  ngAfterContentInit(): void {
    this.highcharts.createChart(this.chartEl.nativeElement, this.myOptions);
  }

  getLocationDetails(placeName, trailName) {
    this._exploreService.getLocationPointsDetails(placeName, trailName).then((res:ResponseModel)=>{
      if(res.responseStatus){
        this.locationPoint = res.result;
        console.log(this.locationPoint);
      } else {
        this.locationPoint = null;
      }
    });
  }
}
