import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeeModule),
     canActivateChild: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'signing',
    loadChildren: () =>
      import('./signin-signout/signin-signout.module').then(
        (m) => m.SigninSignoutModule
      ),
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
