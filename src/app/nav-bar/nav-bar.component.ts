import { Component } from '@angular/core';

const url = 'http://selenium-califano-vilches.web.app';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavigationBarComponent {

  goToLogin() {
    //window.location.href = 'http://localhost:4200/login'
    window.location.href = `${url}/login`
  }

  goToHome() {
    //window.location.href = 'http://localhost:4200/';
    window.location.href = `${url}`

  }
  
  goToCargarDatos() {
    if(localStorage.getItem('papuBool') == 'false') return;
    //window.location.href = 'http://localhost:4200/cargaDeDatos'
    window.location.href = `${url}/cargaDeDatos`
  }

  cerrarSesion() {
    if (localStorage.getItem('papuBool') == 'false') return;

    console.log('Sesion salida');
    localStorage.setItem('papuBool', 'false')
    this.goToHome();
  }

}
