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
      {path: '', redirectTo: 'home'},
      {path: MAIN_URL, loadChildren: './explore-trails/explore-trails.module#ExploreTrailsModule'},
      {path: MY_TRIPS, loadChildren: './my-trips/my-trips.module#MyTripsModule'},
      {path: SUGGESTIONS, loadChildren: './suggestions/suggestions.module#SuggestionsModule'},
      {path: LOCATION_POINT_DETAILS_EXT, loadChildren: './charts/charts.module#ChartsGraphModule'},
      {path: CHATS, loadChildren: './group-channels/group-channels.module#GroupChannelsModule'},
      {path: CHARTS, loadChildren: './charts/charts.module#ChartsGraphModule'},
      {path: NATURE_LOCATION_EXT, loadChildren: './nature-location/nature-location.module#NatureLocationModule'},
      {path: CHAT_CHANNEL, loadChildren: './chats/chats.module#ChatsModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
