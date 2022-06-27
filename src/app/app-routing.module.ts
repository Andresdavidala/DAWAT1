import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./log-in/log-in.component";
import { PrincipalComponent } from './principal/principal.component';
import { TableDataComponent} from './table-data/table-data.component';
const routes: Routes = [

  {path:'', component:LogInComponent},
  {path: 'principal', component:PrincipalComponent},
  {path: 'data', component: TableDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
