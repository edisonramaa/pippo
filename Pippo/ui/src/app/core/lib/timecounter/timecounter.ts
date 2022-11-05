import {Component, EventEmitter, Input, NgModule, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'p-time-counter',
  styleUrls: ['timecounter.css'],
  template: `
    <div [ngClass]="{'ui-time-counter':defaultStyle==true}" [ngStyle]="style" [class]="styleClass">
      <span>{{days}}</span> Day(s)
      <span>{{hours}}</span> Hour(s)
      <span>{{minutes}}</span> Minute(s)
      <span>{{seconds}}</span> Second(s)
    </div>
  `
})
export class TimeCounter implements OnInit {
  @Input("endDate")
  endDate: string;

  @Input("style")
  style: any;

  @Input("defaultStyle")
  defaultStyle: boolean;

  @Input("styleClass")
  styleClass: string;

  @Output("counterEnd")
  counterEnd = new EventEmitter();

  timeCounter: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;

  constructor() {
    this.defaultStyle = true;
  }

  ngOnInit(): void {
    this.initCountdownTimer();
  }


  initCountdownTimer() {
    let dateToCompare = new Date(this.endDate);
    this.timeCounter = setInterval(() => {
      this.getTimeBetweenTwoDates(dateToCompare);
    }, 1000);
  }


  getTimeBetweenTwoDates(dateToCompare) {
    let dateEntered = dateToCompare;
    let now = new Date();
    let timeDifference = dateEntered.getTime() - now.getTime();
    if (timeDifference <= 0) {
      // Timer done
      clearInterval(this.timeCounter);
      this.counterEnd.emit({value: true})
    } else {
      this.seconds = Math.floor(timeDifference / 1000);
      this.minutes = Math.floor(this.seconds / 60);
      this.hours = Math.floor(this.minutes / 60);
      this.days = Math.floor(this.hours / 24);

      this.hours %= 24;
      this.minutes %= 60;
      this.seconds %= 60;
    }
  }

}

@NgModule({
  imports: [CommonModule],
  exports: [TimeCounter],
  declarations: [TimeCounter]
})
export class TimecounterModule {
}
