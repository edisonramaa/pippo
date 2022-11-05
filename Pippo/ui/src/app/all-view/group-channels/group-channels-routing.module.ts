import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {GroupChannelsComponent} from "./group-channels.component";

const routes: Routes = [
  {
    path: '', component: GroupChannelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupChannelsRoutingModule {
}
