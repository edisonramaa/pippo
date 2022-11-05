import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Component} from '@angular/core';
import {TimeCounter, TimecounterModule} from './timecounter';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../common/shared';

@Component({
  template: `
        <p-time-counter [endDate]="endDate"></p-time-counter>
    `,
})
class TestTimeCounterComponent {
  endDate: string;

  constructor() {

  }

  updateDate() {
    let lastDate = new Date();
    lastDate.setDate(lastDate.getDate() + 7);
    this.endDate = lastDate.toString();
  }
}

describe('TimeCounter', () => {

  let timeCounter: TimeCounter;
  let fixture: ComponentFixture<TestTimeCounterComponent>;
  let component: TestTimeCounterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SharedModule,
        TimecounterModule
      ],
      declarations: [
        TestTimeCounterComponent
      ],
    });

    fixture = TestBed.createComponent(TestTimeCounterComponent);
    timeCounter = fixture.debugElement.children[0].componentInstance;
    component = fixture.componentInstance;
  });

  it('should display the Day(s)', () => {
    component.updateDate();
    fixture.detectChanges();
    const timerEl = fixture.debugElement.query(By.css('div')).nativeElement;
    expect(timerEl.textContent).toContain("Day(s)");
  });

  it('should change styleClass', () => {
    timeCounter.styleClass = "new-timer-style";
    fixture.detectChanges();
    const timerDivEl = fixture.debugElement.query(By.css('div')).nativeElement;
    expect(timerDivEl.className).toContain("new-timer-style");
  });


});
