import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor.model';
import { EditarService } from 'src/app/servicios/editar/editar.service';

@Component({
  selector: 'app-editar',
  templateUrl: '../html/editarhtml/editar.component.html',
  styleUrls: ['../css/editar/editar.component.css']
})
export class EditarComponent implements OnInit {

  insertarProfesor: any = [];
  textProfesor = "";
  textArea = "";
  textEdad = "";
  textNacimiento = "";
  profesores: any = [];
  area: any = [];
  edad: any = [];
  nacimiento: any = [];
  seleccionados: string[] = [];
  completo = "Profesor actualizado";

  modificarProfesor: any = [];
  id!: number;

  //llena tabla
  profesorestab: any = [];

  //Filtrar
  datoProfesor: any = [];

  ConsultarporId: any = [];

  constructor(private router: Router,
    public editarServicio: EditarService,
    private route: ActivatedRoute) {
    this.procesos();
  }

  ngOnInit(): void {
    this.cargar(this.route.snapshot.params['profesores']);
  }

  procesos() {
    this.cargarProfesores();
  }

  regresar() {
    this.router.navigate(['menu/profesores']);
  }

  cargar(profesores: string) {
    this.editarServicio.getProfesoresByUno(profesores).subscribe((profesor: Profesor) => {
      this.id = profesor.id;
      this.seleccionados = [];
      this.ConsultarporId = profesor;
      this.textProfesor = profesor.profesores;
      this.textArea = profesor.area;
      this.textEdad = profesor.edad;
      this.textNacimiento = profesor.nacimiento;
      this.seleccionados.push(profesor.sexo ? "1" : "0");
    });
  }

  cargarProfesores() {
    this.editarServicio.getProfesores().subscribe((resultado: any) => {
      this.profesorestab = resultado;
      this.datoProfesor = resultado;
    })
  }

  ModificarProfesor() {
    const profes = new Profesor();
    profes.profesores = this.textProfesor;
    profes.area = this.textArea;
    profes.nacimiento = this.textNacimiento;
    profes.edad = this.textEdad;
    profes.sexo = this.seleccionados;
    this.editarServicio.putProfesores(profes, this.id).subscribe((resultadoPut: Profesor) => {
      this.modificarProfesor = Profesor;
      this.procesos();
      this.router.navigate(['menu/profesores']);
      alert(this.completo);
    });
  }
}