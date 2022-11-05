import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/lib/services/auth-guard.service";
//, canLoad: [AuthGuard
const routes: Routes = [
  {path: '', redirectTo: 'pippo', pathMatch: 'full'},
  {path: 'pippo', loadChildren: () => import('./all-view/layout.module').then(m => m.LayoutModule)},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'sign-up', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
