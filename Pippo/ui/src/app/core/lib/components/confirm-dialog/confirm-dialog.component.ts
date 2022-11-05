import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: 'confirm-dialog.html',
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }


}

export interface DialogData {
  title: string;
  content: string;
  result: boolean;
}
