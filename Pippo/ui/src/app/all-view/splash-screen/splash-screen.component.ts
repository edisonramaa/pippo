
import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {animate, animateChild, query, style, transition, trigger} from '@angular/animations';
import {PwaService} from "../../app-services/pwa.service";

@Component({
  selector: 'app-splash-screen',
  animations: [
    // the fade-in/fade-out animation.
    trigger('fadeOut', [
      transition(':leave', [
        query(':leave', animateChild(), {optional: true}),
        animate(1300, style({opacity: 0}))
      ]),
    ]),
  ],
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SplashScreenComponent implements OnInit {
  show = true;
  @Input() backgroundColor: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private appRef: ApplicationRef,
    private pwaService: PwaService
  ) {
  }

  ngOnInit(): void {
    this.pwaService.checkForUpdate()
      .subscribe(result => {
        this.show = result;
        this.cdr.detectChanges();
      });
  }
}
