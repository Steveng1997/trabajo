import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { CompartidoComponent } from './pages/compartido/compartido.component';
import { InsertComponent } from './pages/profesores/insertarpro/insert.component';
import { EditarComponent } from './pages/profesores/editarpro/editar.component';
import { PadresComponent } from './pages/padres/padres.component';
import { MadresComponent } from './pages/madres/madres.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { InsertesComponent } from './pages/estudiantes/insertares/insertes.component';
import { EditesComponent } from './pages/estudiantes/editares/edites.component';
import { MostrarReComponent } from './pages/menuRegistros/mostrar-re.component';
import { InsertregisComponent } from './pages/menuRegistros/insertarmenuR/insertregis.component';
import { EditRegisComponent } from './pages/menuRegistros/editarmenuR/edit-regis.component';
import { CargaComponent } from './carga/carga.component';

const routes: Routes = [
  { path: 'carga', component: CargaComponent },
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