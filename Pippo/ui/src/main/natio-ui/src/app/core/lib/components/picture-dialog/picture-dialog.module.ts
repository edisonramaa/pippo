import {MatButtonModule, MatDialogModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {PictureDialogComponent} from "./picture-dialog.component";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [PictureDialogComponent]
})
export class PictureDialogModule {
}
