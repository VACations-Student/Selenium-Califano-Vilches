import { Component } from '@angular/core';

@Component({
  selector: 'app-carga-de-datos',
  templateUrl: './carga-de-datos.component.html',
  styleUrls: ['./carga-de-datos.component.css']
})
export class CargaDeDatosComponent {
  nombre:string = '';
  apellido:string = '';
  dni:string = '';
  cuil:string = '';

  print() {
    console.log(`${this.nombre}, ${this.apellido}, ${this.dni}, ${this.cuil}`);
  }
}
