import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule,
  MatNativeDateModule, MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from "@angular/material";
import {MatInputModule} from '@angular/material/input';
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {BarRatingModule} from "ngx-bar-rating";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TimecounterModule} from "../lib/timecounter/timecounter";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    ZXingScannerModule,
    ZXingScannerModule,
    MatInputModule,
    MatCardModule,
    BarRatingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    TimecounterModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatDividerModule,
    ZXingScannerModule,
    MatInputModule,
    MatCardModule,
    BarRatingModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    TimecounterModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
})
export class CustomMaterialModule {


}
