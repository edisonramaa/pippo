import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {EventService} from "../../../../core/lib/services/event.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input("sideNavBar")
  sideNavbar;
  subscribeEvent: any;
  @Input("headerTitle")
  headerTitle: string = "Explore Trails";

  constructor(private _eventService: EventService) {
  }

  ngOnInit() {
    this.subscribeEvent = this._eventService.getHeader().subscribe((headerTitle: string) => {
      this.headerTitle = headerTitle;
    });
  }

  ngOnDestroy(): void {
    this.subscribeEvent.unsubscribe();
  }

  openSideNavBar(){
    this.sideNavbar.open();
  }

}
