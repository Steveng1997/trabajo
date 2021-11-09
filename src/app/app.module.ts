import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { MostrarReComponent } from './componentes/mostrar-re.component';
import { EditesComponent } from './componentes/edites.component';
import { InsertregisComponent } from './componentes/insertregis.component';
import { EditRegisComponent } from './componentes/edit-regis.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FiltrossPipe } from './pipes/filtross.pipe';
import { FiltresesPipe } from './pipes/filtreses.pipe';
import { FiltroproPipe } from './pipes/filtropro.pipe';
import { FiltromenPipe } from './pipes/filtromen.pipe';
import { InsertesComponent } from './componentes/insertes.component';

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
    InsertesComponent,
    EditarComponent,
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
