import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";

/**

 */
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,

  ],

  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]

})
export class CommonFormGroupModule {
}
