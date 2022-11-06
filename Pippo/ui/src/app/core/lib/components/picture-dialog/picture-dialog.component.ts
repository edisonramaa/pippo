import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-picture-dialog',
  templateUrl: 'picture-dialog.html',
  styleUrls: ['picture-dialog.scss']
})
export class PictureDialogComponent {
  fileUrl: any;
  downloadFileName: string;

  constructor(
    public dialogRef: MatDialogRef<PictureDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PictureDialogData,
    private _httpService: HttpService,
    private _sanitizer: DomSanitizer
  ) {
    this.downloadFile(data.content);
    this.downloadFileName = data.title.toString().replace(/\s/g, "").concat(".png");
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  downloadFile(downloadUrl: string) {
    return this._httpService.downloadFile(downloadUrl)
      .subscribe(
        (res) => {
          const blob = new Blob([res], {type: 'application/octet-stream'});

          this.fileUrl = this._sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
        }, error => {
          console.log('download error:', JSON.stringify(error));
        }, () => {
          console.log('Completed file download.')
        });
  }

}

export interface PictureDialogData {
  title: string;
  content: string;
  result: boolean;
}
