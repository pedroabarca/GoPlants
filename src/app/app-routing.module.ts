import {RouterModule, Routes} from '@angular/router';
import {QuienesSomosComponent} from './quienes-somos/quienes-somos.component';
import {JuanCastroBlancoComponent} from './juan-castro-blanco/juan-castro-blanco.component';
import {PerfilComponent} from './perfil/perfil.component';
import {AdministracionComponent} from './administracion/administracion.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: '', component: QuienesSomosComponent},
  {path: 'juancastroblanco', component: JuanCastroBlancoComponent },
  {path: 'perfil', component: PerfilComponent },
  {path: 'administracion', component: AdministracionComponent },
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
