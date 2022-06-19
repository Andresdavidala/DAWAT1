import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  {
  

  constructor(private router: Router) { 

    
   }
   
  onSubmit(usuario: String, password: String){
    if(usuario == "usuario" && password == "usuario"){
      this.router.navigate(['/principal'])
    }
    else{
      
      alert("Error en las credenciales")
      
    }
  
  }

  

}
