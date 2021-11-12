import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { MostrarReComponent } from './pages/menuRegistros/mostrar-re.component';
import { EditesComponent } from './pages/estudiantes/editares/edites.component';
import { InsertregisComponent } from './pages/menuRegistros/insertarmenuR/insertregis.component';
import { EditRegisComponent } from './pages/menuRegistros/editarmenuR/edit-regis.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FiltrossPipe } from './pipes/filtross.pipe';
import { FiltresesPipe } from './pipes/filtreses.pipe';
import { FiltroproPipe } from './pipes/filtropro.pipe';
import { FiltromenPipe } from './pipes/filtromen.pipe';
import { InsertesComponent } from './pages/estudiantes/insertares/insertes.component';
import { CargaComponent } from './carga/carga.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    ProfesoresComponent,
    CompartidoComponent,
    InsertComponent,
    PadresComponent,
    MadresComponent,
    EstudiantesComponent,
    MostrarReComponent,
    EditesComponent,
    InsertregisComponent,
    EditRegisComponent,
    FiltroPipe,
    FiltrossPipe,
    FiltresesPipe,
    FiltroproPipe,
    FiltromenPipe,
    EditarComponent,
    InsertesComponent,
    CargaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
