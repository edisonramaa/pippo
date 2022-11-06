import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventService } from '../../../../core/lib/services/event.service';
import {
  HOME,
  PROFILE,
  CHATS, PIPPO, MY_BOOKINGS,
} from '../../../../core/utility/navigation-url';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private _router: Router, private _eventService: EventService) {}

  ngOnInit() {}

  openFindProducts() {
    this._eventService.setHeader('Ideas');

    if (
      document.querySelectorAll('.footer-button-container.selected').length > 0
    ) {
      document
        .querySelector('.footer-button-container.selected')
        .classList.remove('selected');
    }
    document
      .querySelectorAll('.footer-button-container')[0]
      .classList.add('selected');

    let finalUrl = '/' + PIPPO + '/' + HOME;
    this._router.navigateByUrl(finalUrl);
  }

  openChats() {
    this._eventService.setHeader('Chats');

    if (
      document.querySelectorAll('.footer-button-container.selected').length > 0
    ) {
      document
        .querySelector('.footer-button-container.selected')
        .classList.remove('selected');
    }
    document
      .querySelectorAll('.footer-button-container')[1]
      .classList.add('selected');

    let finalUrl = '/' + PIPPO + '/' + CHATS;
    this._router.navigateByUrl(finalUrl);
  }

  openMyBookings() {
    this._eventService.setHeader('My Bookings');

    if (
      document.querySelectorAll('.footer-button-container.selected').length > 0
    ) {
      document
        .querySelector('.footer-button-container.selected')
        .classList.remove('selected');
    }
    document
      .querySelectorAll('.footer-button-container')[2]
      .classList.add('selected');

    let finalUrl = '/' + PIPPO + '/' + MY_BOOKINGS;
    this._router.navigateByUrl(finalUrl);
  }

  openProfile() {
    this._eventService.setHeader('Profile');

    if (
      document.querySelectorAll('.footer-button-container.selected').length > 0
    ) {
      document
        .querySelector('.footer-button-container.selected')
        .classList.remove('selected');
    }
    document
      .querySelectorAll('.footer-button-container')[3]
      .classList.add('selected');

    let finalUrl = '/' + PIPPO + '/' + PROFILE;
    this._router.navigateByUrl(finalUrl);
  }
}
