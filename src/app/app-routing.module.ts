import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login.component';
import { RegistroComponent } from './componentes/registro.component';
import { MenuComponent } from './componentes/menu.component';
import { ProfesoresComponent } from './componentes/profesores.component';
import { CompartidoComponent } from './componentes/compartido.component';
import { InsertComponent } from './componentes/insert.component';
import { EditarComponent } from './componentes/editar.component';
import { PadresComponent } from './componentes/padres.component';
import { MadresComponent } from './componentes/madres.component';
import { EstudiantesComponent } from './componentes/estudiantes.component';
import { InsertesComponent } from './componentes/insertes.component';
import { EditesComponent } from './componentes/edites.component';
import { MostrarReComponent } from './componentes/mostrar-re.component';
import { InsertregisComponent } from './componentes/insertregis.component';
import { EditRegisComponent } from './componentes/edit-regis.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'menu', component: MenuComponent,
    children: [
      {
        path: 'profesores', component: ProfesoresComponent
      },
      {
        path: 'padres', component: PadresComponent
      },
      {
        path: 'madres', component: MadresComponent
      },
      {
        path: 'estudiantes', component: EstudiantesComponent
      },
      {
        path: 'mostrarregistro', component: MostrarReComponent
      },
    ],
  },
  { path: 'compartido', component: CompartidoComponent },
  { path: 'insert', component: InsertComponent },
  { path: 'edit/:profesores', component: EditarComponent },
  { path: 'edites/:estudiantes', component: EditesComponent },
  { path: 'insertes', component: InsertesComponent },
  { path: 'insertregis', component: InsertregisComponent },
  { path: 'editregis/:nombre', component: EditRegisComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }