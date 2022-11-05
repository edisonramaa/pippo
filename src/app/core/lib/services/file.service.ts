import {Injectable} from "@angular/core";
import {ApiConstant} from "../../utility/api.constant";
import {Observable, Subject} from "rxjs";

/**

 */
@Injectable()
export class FileService {
  progress: number;
  progressObserver = new Subject();
  progress$ = new Subject();

  constructor() {
    this.progress$ = Observable.create(observer => {
      this.progressObserver = observer
    }).share();
  }

  uploadRequest(uploadFile: File, url): Observable<any> {
    return Observable.create(observer => {
      let formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();

      formData.append("uploadFile", uploadFile);
      // formData.append("names", names[i]);
      // formData.append("fileTypeName", fileTypeName[i]);


      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            // console.log("[Upload Service] Upload Response: " + xhr.response);
            observer.next(JSON.parse(xhr.response));
            observer.complete();

          } else {
            observer.error(xhr.response);
          }
        }
      };

      xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);

        this.progressObserver.next(this.progress);
        // this.getCancelBtnSubject().subscribe((status: boolean) => {
        //   if (status) {
        //     xhr.abort();
        //   }
        // });
      };
      // console.log("[Upload Service] Form Data: " + JSON.stringify(formData));
      xhr.open('POST', ApiConstant.BASE_API + url, true);
      // xhr.setRequestHeader("authorization", this.localStorageService.getToken());
      xhr.send(formData);
    });
  }

}
