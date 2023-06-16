import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavLandingComponent } from './components/nav-landing/nav-landing.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { OpcionesComponent } from './components/opciones/opciones.component';
import { PersonalizacionComponent } from './components/personalizacion/personalizacion.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { SignupComponent } from './components/signup/signup.component';
import { StoreComponent } from './components/store/store.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { NavMecanicoComponent } from './components/nav-mecanico/nav-mecanico.component';
import { OpcionUsuarioComponent } from './components/opcion-usuario/opcion-usuario.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { EditProductoComponent } from './components/edit-producto/edit-producto.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'opciones', component: OpcionesComponent },
  { path: 'personalizacion', component: PersonalizacionComponent },
  { path: 'mantenimiento', component: MantenimientoComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'store', component: StoreComponent},
  { path: 'listaProducto', component: ListaProductoComponent},
  { path: 'navMecanico', component: NavMecanicoComponent},
  { path: 'opcion-usuario', component: OpcionUsuarioComponent},
  { path: 'addProducto', component: AddProductoComponent},
  { path: 'producto/:id', component: EditProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
