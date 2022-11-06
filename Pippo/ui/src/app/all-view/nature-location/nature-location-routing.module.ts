import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NatureLocationComponent} from "./nature-location.component";

const routes: Routes = [
  {
    path: '', component: NatureLocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NatureLocationRoutingModule {
}
