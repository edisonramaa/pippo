import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout.component";
import {
  CHATS,
  MAIN_URL, MY_BOOKINGS,
  PROFILE
} from "../core/utility/navigation-url";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: MAIN_URL, loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: CHATS, loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule)},
      {path: PROFILE, loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
      {path: MY_BOOKINGS, loadChildren: () => import('./my-bookings/my-bookings.module').then(m => m.MyBookingsModule)},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
