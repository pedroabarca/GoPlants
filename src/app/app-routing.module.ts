import {RouterModule, Routes} from '@angular/router';
import {QuienesSomosComponent} from './quienes-somos/quienes-somos.component';
import {JuanCastroBlancoComponent} from './juan-castro-blanco/juan-castro-blanco.component';
import {PerfilComponent} from './perfil/perfil.component';
import {AdministracionComponent} from './administracion/administracion.component';
import {NgModule} from '@angular/core';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {LoginComponent} from './auth/login/login.component';

const appRoutes: Routes = [
  {path: '', component: QuienesSomosComponent},
  {path: 'juancastroblanco', component: JuanCastroBlancoComponent },
  {path: 'perfil', component: PerfilComponent },
  {path: 'administracion', component: AdministracionComponent },
  {path: 'signup', component: SignUpComponent },
  {path: 'login', component: LoginComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
