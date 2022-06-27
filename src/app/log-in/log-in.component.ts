import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataUserComponent } from '../data-user/data-user.component';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  {
  
  dataUsuario = new DataUserComponent()
  
  constructor(private router: Router) { 

    
   }
   
  onSubmit(usuario: String, password: String){

    
    if(usuario == this.dataUsuario.dataUsuario && password == "usuario"){
      this.router.navigate(['/principal'])
    }
    else{
      
      alert("Error en las credenciales")
      window.location.reload();
      
    }
  
  }

  

}
