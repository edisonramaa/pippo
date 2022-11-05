import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/lib/services/auth-guard.service";
//, canLoad: [AuthGuard
const routes: Routes = [
  {path: '', redirectTo: 'pippo', pathMatch: 'full'},
  {path: 'pippo', loadChildren: './all-view/layout.module#LayoutModule'},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'sign-up', loadChildren: './sign-up/sign-up.module#SignUpModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
