import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    name:string = '';
    password:string = '';

    print() {
      console.log(this.name + ' ' + this.password);
    }
    fakeComprobation(){
      if(this.name != "cali" || this.password != "vilches"){
        localStorage.setItem('papuBool', 'false')
        console.log('Valid: ' + localStorage.getItem('papuBool'));
        return;
      }
      localStorage.setItem('papuBool', 'true')
      console.log('Valid: ' + localStorage.getItem('papuBool'));
    }
}
