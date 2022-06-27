import { Component, OnInit, Inject } from '@angular/core';
import { WindowModelService } from '../services/window-model.service';
import { TableRegisterComponent } from '../table-register/table-register.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModificarTablaComponent } from '../modificar-tabla/modificar-tabla.component';

export interface PeriodicElement {
  nombre: string;
  position: number;
  cedula: number;
  apellido: string;
  direccion: string;
  edad: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, cedula: 1545488796, nombre: 'Juan Alberto',  apellido: 'Rendon León', direccion:"av. 25 de diciembre", edad: 22},
  {position: 2, cedula: 1055455456, nombre: 'Pedro Emilio',  apellido: 'Alvarez Vera', direccion:"av. 25 de diciembre", edad: 22},
  {position: 3,  cedula: 1548652312, nombre: 'Wilson Frank', apellido: 'Martinez Flores', direccion:"av. 25 de diciembre", edad: 22},
 
];
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

 

  displayedColumns: string[] = ['position', 'cedula', 'nombre', 'apellido', 'direccion', 'edad', 'acciones'];
  dataSource = ELEMENT_DATA;
  
  modaDataRegister!: boolean

  constructor(private modelService: WindowModelService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.modelService.$modal.subscribe((valor) => (this.modaDataRegister = valor))
    
  }

  // closeModal(){
  //    this.modelService.$modal.subscribe((valor) => (this.modaDataRegister = valor))
  // }

  //sección ventana modificar
  openDialog() {
    this.dialog.open(ModificarTablaComponent, {
     
    });
  }
  

  //↑
  //

  openModal(){
    this.modaDataRegister = true;
  }

  

}

