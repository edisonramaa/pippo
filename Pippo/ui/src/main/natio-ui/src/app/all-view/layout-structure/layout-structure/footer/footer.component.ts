import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {EventService} from "../../../../core/lib/services/event.service";
import {
  EXPLORE_TRAILS,
  PIPPO,
  MY_TRIPS,
  SUGGESTIONS,
  CHATS
} from "../../../../core/utility/navigation-url";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor(private _router: Router, private _eventService: EventService) {
    }

  ngOnInit() {
  }

  openFindTrail() {
    this._eventService.setHeader("Trails");

  if (document.querySelectorAll(".footer-button-container.selected").length > 0) {
    document.querySelector(".footer-button-container.selected").classList.remove("selected");
  }
  document.querySelectorAll(".footer-button-container")[0].classList.add("selected");

    let finalUrl = "/"+PIPPO+  "/" + EXPLORE_TRAILS;
    this._router.navigateByUrl(finalUrl);
}

  openMyPlans(){
      this._eventService.setHeader("My Plans");

    if (document.querySelectorAll(".footer-button-container.selected").length > 0) {
      document.querySelector(".footer-button-container.selected").classList.remove("selected");
    }
    document.querySelectorAll(".footer-button-container")[1].classList.add("selected");

    let finalUrl = "/"+PIPPO+ "/" + MY_TRIPS;
    this._router.navigateByUrl(finalUrl);
  }
  openSuggestions(){
      this._eventService.setHeader("Suggestions");

    if (document.querySelectorAll(".footer-button-container.selected").length > 0) {
      document.querySelector(".footer-button-container.selected").classList.remove("selected");
    }
    document.querySelectorAll(".footer-button-container")[2].classList.add("selected");

    let finalUrl = "/"+PIPPO+  "/" + SUGGESTIONS;
    this._router.navigateByUrl(finalUrl);
  }
  openChats() {
      this._eventService.setHeader("Chats");

    if (document.querySelectorAll(".footer-button-container.selected").length > 0) {
      document.querySelector(".footer-button-container.selected").classList.remove("selected");
    }
    document.querySelectorAll(".footer-button-container")[3].classList.add("selected");

    let finalUrl = "/"+PIPPO+  "/" + CHATS;
    this._router.navigateByUrl(finalUrl);
  }
}
