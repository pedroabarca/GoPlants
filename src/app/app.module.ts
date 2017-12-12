import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaterComponent } from './heater/heater.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { JuanCastroBlancoComponent } from './juan-castro-blanco/juan-castro-blanco.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaterComponent,
    QuienesSomosComponent,
    JuanCastroBlancoComponent,
    PerfilComponent,
    AdministracionComponent,
    SignUpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
