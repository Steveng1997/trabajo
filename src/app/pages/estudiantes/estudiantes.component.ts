import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante.model';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: '../estudiantes/estudiantes.component.html',
  styleUrls: ['../estudiantes/estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  public search: string = "";
  public page: number = 0;

  public estudiantess!: [];

  public mostrarLabel = false;
  public ocultarLabel = false;

  //Consultar
  ConsultarporId: any = [];

  //Llena tabla
  Estudiantestab: Estudiante[] = [];

  textEstudiante = "";
  textCelular = "";
  textEdad = "";
  textNacimiento = "";
  estudiantes: any = [];
  celular: any = [];
  edad: any = [];
  fecha: any = [];
  seleccionados: string[] = [];

  //Eliminar
  id: any = [];
  eliminarDatos: any = [];
  eliminado = "Estudiante eliminado en la BD";

  constructor(private router: Router,
    public estudiantesService: EstudiantesService,) {
    this.cargarEstudiantes();

    if (this.id != 0) {
      this.EliminarEstudiantes(this.id);
    }
  }

  ngOnInit(): void { }

  ir() {
    this.router.navigate(['insertes']);
  }

  ConsultarporIds(estudiantes: string) {
    this.estudiantesService.getEstudiantesByUno(estudiantes).subscribe((estudiant: Estudiante) => {
      this.seleccionados = [];
      this.ConsultarporId = estudiant;
      this.textEstudiante = estudiant.estudiantes;
      this.textCelular = estudiant.celular;
      this.textEdad = estudiant.edad;
      this.textNacimiento = estudiant.fecha;
      this.seleccionados.push(estudiant.sexo ? "1" : "0");
      this.router.navigate(['edites/' + estudiantes])
    });
  }

  EliminarEstudiantes(id: number) {
    this.estudiantesService.deleteEstudiantes(id).subscribe(() => {
      this.eliminarDatos = delete (this.eliminarDatos);
      this.cargarEstudiantes();
      alert(this.eliminado);
    });
  }

  cargarEstudiantes() {
    this.estudiantesService.getEstudiantes().subscribe((resultado: Estudiante[]) => {
      this.Estudiantestab = resultado;
      this.Estudiantestab.map(q => {
        q.celular = q.celular.toString();
        q.edad = q.edad.toString();
      });
    })
  }

  aparecer() {
    this.mostrarLabel = true;
    this.ocultarLabel = true;
  }

  ocultar() {
    this.mostrarLabel = false;
    this.ocultarLabel = false;
  }

  onSearchEstudiantes(searchEstudiantes: string) {
    if (searchEstudiantes.length > 0) { //Esta linea consiste desde donde comenzamos a buscar la palabra.
      this.Estudiantestab = this.Estudiantestab.filter((cantd: Estudiante) => cantd.estudiantes.includes(searchEstudiantes));
    }
    else {
      this.cargarEstudiantes();
    }
  }

  onSearchCelular(searchCelular: string) {
    if (searchCelular.length > 0) { //Esta linea consiste desde donde comenzamos a buscar la palabra.
      this.Estudiantestab = this.Estudiantestab.filter((cantd: Estudiante) => cantd.celular.includes(searchCelular));
    }
    else {
      this.cargarEstudiantes();
    }
  }

  onSearchEdad(searchEdad: string) {
    if (searchEdad.length > 0) { //Esta linea consiste desde donde comenzamos a buscar la palabra.
      this.Estudiantestab = this.Estudiantestab.filter((cantd: Estudiante) => cantd.edad.includes(searchEdad));
    }
    else {
      this.cargarEstudiantes();
    }
  }

  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if (this.page > 0)
      this.page -= 5;
  }
}