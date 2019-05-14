import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRouterUrls, AppRoutes } from './app-routing.config';
import {AuthLoginComponent} from './views/auth/components';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {IsAuthenticatedOnLoginGuard} from './guards';
import {AuthRegisterComponent} from './views/auth/components/auth-register/auth-register.component';
import {WelcomeComponent} from './views/welcome/welcome.component';

const routes: Routes = [
  // odkomentować gdy dodasz komponent offers
  // { path: '', redirectTo: AppRouterUrls.DEFAULT, pathMatch: 'full' },
  {path: '', component: WelcomeComponent},
  {
    path: AppRoutes.AUTH,
    children: [
      { path: '', pathMatch: 'full', redirectTo: AppRouterUrls.LOGIN },
      { path: AppRoutes.LOGIN, component: AuthLoginComponent },
      { path: AppRoutes.REGISTER, component: AuthRegisterComponent }
    ],
  },
  { path: AppRoutes.DASHBOARD, component: DashboardComponent, canActivate: [IsAuthenticatedOnLoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
