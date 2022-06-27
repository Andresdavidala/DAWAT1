import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { PrincipalComponent } from './principal/principal.component';
import { DataUserComponent } from './data-user/data-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableDataComponent } from './table-data/table-data.component';
import {MatCardModule} from '@angular/material/card';

import {MatTableModule} from '@angular/material/table';
import { TableRegisterComponent } from './table-register/table-register.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { ModificarTablaComponent } from './modificar-tabla/modificar-tabla.component';
import {MatInputModule} from '@angular/material/input';

import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    PrincipalComponent,
    DataUserComponent,
    TableDataComponent,
    TableRegisterComponent,
    ModificarTablaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule, 
    MatInputModule,
    MatIconModule, 
    MatTooltipModule,
    MatButtonModule
  ],
  entryComponents: [LogInComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
