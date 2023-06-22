import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavLandingComponent } from './components/nav-landing/nav-landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { OpcionesComponent } from './components/opciones/opciones.component';
import { PersonalizacionComponent } from './components/personalizacion/personalizacion.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './components/signup/signup.component';
import { StoreComponent } from './components/store/store.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { NavMecanicoComponent } from './components/nav-mecanico/nav-mecanico.component';
import { NavClienteComponent } from './components/nav-cliente/nav-cliente.component';
import { OpcionUsuarioComponent } from './components/opcion-usuario/opcion-usuario.component';
import { EditProductoComponent } from './components/edit-producto/edit-producto.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { PerfilComponent } from './components/perfil/perfil.component';



@NgModule({
  declarations: [
    AppComponent,
    NavLandingComponent,
    LandingComponent,
    LoginComponent,
    OpcionesComponent,
    PersonalizacionComponent,
    MantenimientoComponent,
    TiendaComponent,
    SignupComponent,
    StoreComponent,
    ListaProductoComponent,
    NavMecanicoComponent,
    NavClienteComponent,
    OpcionUsuarioComponent,
    EditProductoComponent,
    AddProductoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
