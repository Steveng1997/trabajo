import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor.model';
import { ProfesoresService } from '../servicios/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: '../html/profesores.component.html',
  styleUrls: ['../css/profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  //Profesores

  public search: string = "";
  public page: number = 0;

  //Diferenciar.
  public profesoress!: [];

  public mostrarLabel = false;
  public ocultarLabel = false;

  //Consultar
  ConsultarporId: any = [];

  //Llena tabla
  profesorestab: Profesor[] = [];


  textProfesor = "";
  textArea = "";
  textEdad = "";
  textNacimiento = "";
  profesores: any = [];
  area: any = [];
  edad: any = [];
  nacimiento: any = [];
  seleccionados: string[] = [];

  //Eliminar
  id: any = [];
  eliminarDatos: any = [];
  eliminado = "Profesor eliminado en la BD";

  constructor(private router: Router,
    public profesoresService: ProfesoresService,) {
    this.cargarProfesores();

    if (this.id != 0) {
      this.EliminarProfesores(this.id);
    }
  }

  ngOnInit(): void { }

  ir() {
    this.router.navigate(['insert']);
  }

  ConsultarporIds(profesores: string) {
    this.profesoresService.getProfesoresByUno(profesores).subscribe((profesor: Profesor) => {
      this.seleccionados = [];
      this.ConsultarporId = profesor;
      this.textProfesor = profesor.profesores;
      this.textArea = profesor.area;
      this.textEdad = profesor.edad;
      this.textNacimiento = profesor.nacimiento;
      this.seleccionados.push(profesor.sexo ? "1" : "0");
      this.router.navigate(['edit/' + profesores])
    });
  }

  EliminarProfesores(id: number) {
    this.profesoresService.deleteProfesores(id).subscribe(() => {
      this.eliminarDatos = delete (this.eliminarDatos);
      this.cargarProfesores();
      alert(this.eliminado);
    });
  }

  cargarProfesores() {
    this.profesoresService.getProfesores().subscribe((resultado: Profesor[]) => {
      this.profesorestab = resultado;
      this.profesorestab.map(e => {
        e.edad = e.edad.toString();
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

  onSearchProfesores(search: string) {
    if (search.length > 0) { //Esta linea consiste desde donde comenzamos a buscar la palabra.
      this.profesorestab = this.profesorestab.filter((prof: Profesor) => prof.profesores.includes(search));
    }
    else {
      this.cargarProfesores();
    }
  }

  onSearchEdad(searchEdad: string) {
    if (searchEdad.length > 0) { //Esta linea consiste desde donde comenzamos a buscar la palabra.
      this.profesorestab = this.profesorestab.filter((prof: Profesor) => prof.edad.includes(searchEdad));
    }
    else {
      this.cargarProfesores();
    }
  }

  onSearchArea(searchArea: string) {
    if (searchArea.length > 0) { //Esta linea consiste desde donde comenzamos a buscar la palabra.
      this.profesorestab = this.profesorestab.filter((prof: Profesor) => prof.area.includes(searchArea));
    }
    else {
      this.cargarProfesores();
    }
  }

  nextPage() {
    this.page += 5;
  }
  prevPage() {
      this.page -= 5
  }
}