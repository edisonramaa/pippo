import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ExploreTrailsComponent} from "./explore-trails.component";

const routes: Routes = [
  {
    path: '', component: ExploreTrailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreTrailsRoutingModule {
}
