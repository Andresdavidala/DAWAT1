import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    PrincipalComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [LogInComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
