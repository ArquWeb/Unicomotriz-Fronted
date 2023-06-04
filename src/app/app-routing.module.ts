import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavLandingComponent } from './components/nav-landing/nav-landing.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { OpcionesComponent } from './components/opciones/opciones.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "login", component: LoginComponent },
  { path: "opciones", component: OpcionesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
