import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MyTripsComponent} from "./my-trips.component";

const routes: Routes = [
  {
    path: '', component: MyTripsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTripsRoutingModule {
}
