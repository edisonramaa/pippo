import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout.component";
import {
  CHARTS,
  CHATS,
  MAIN_URL,
  MY_TRIPS,
  SUGGESTIONS,
  NATURE_LOCATION_EXT,
  LOCATION_POINT_DETAILS,
  CHAT_CHANNEL,
  LOCATION_POINT_DETAILS_EXT
} from "../core/utility/navigation-url";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: MAIN_URL, loadChildren: () => import('./explore-trails/explore-trails.module').then(m => m.ExploreTrailsModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
