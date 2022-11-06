import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable()
export class EventService {
  private headerNotification: Subject<any> = new Subject<any>();
  private loginConfirmNotification: Subject<boolean> = new Subject<boolean>();

  setHeader(headerTitle: string): void {
    this.headerNotification.next(headerTitle);
  }

  getHeader(): Observable<any> {
    return this.headerNotification.asObservable();
  }

  setLoginNotification(confirm: boolean): void {
    this.loginConfirmNotification.next(confirm);
  }

  getLoginNotification(): Observable<any> {
    return this.loginConfirmNotification.asObservable();
  }

}
