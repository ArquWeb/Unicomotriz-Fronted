import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavLandingComponent } from './components/nav-landing/nav-landing.component';

const routes: Routes = [
  { path: "landing", component: NavLandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
