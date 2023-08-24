import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CargaDeDatosComponent } from './carga-de-datos/carga-de-datos.component';
import { NavigationBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  }, 
  {
    path: 'nav',
    component: NavigationBarComponent,
    title: 'nav'
  },
  {
    path: 'cargaDeDatos',
    component: CargaDeDatosComponent,
    title: 'Carga de Datos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
