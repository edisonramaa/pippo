import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout.component";
import {
  MAIN_URL,
  PROFILE
} from "../core/utility/navigation-url";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: MAIN_URL, loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: 'chats', loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule)},
      {path: PROFILE, loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
