import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor() { }
  cambioText(){
    var cerrarSesion = document.getElementById('usButton')
    
    if(cerrarSesion?.innerHTML == "Guillermo Correa"){
      cerrarSesion.innerHTML = 'Cerrar Sesión'

    }
    
  }
  cambioUser(){
    var cerrarSesion = document.getElementById('usButton')
    if(cerrarSesion?.innerHTML == "Cerrar Sesión"){
      cerrarSesion.innerHTML = 'Guillermo Correa'

    }
  }
  ngOnInit(): void {
  }

}
