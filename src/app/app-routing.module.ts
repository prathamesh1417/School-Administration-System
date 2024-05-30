import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((A) => A.LoginComponent),
  },
  {
    path: 'home-page',
    loadComponent: () =>
      import('./landing-page/landing-page.component').then(
        (A) => A.LandingPageComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
