import {MatButtonModule, MatDialogModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {ConfirmDialogComponent} from "./confirm-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [ConfirmDialogComponent],
})
export class ConfirmDialogModule {
}
