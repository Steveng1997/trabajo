import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../servicios/insertar/insert.service';
import { EstudiantesService } from 'src/app/servicios/estudiantes.service';

@Component({
  selector: 'app-insert',
  templateUrl: '../html/insertarhtml/insert.component.html',
  styleUrls: ['../css/insertar/insert.component.css']
})
export class InsertComponent implements OnInit {

  //Estudiantes
  textEstudiantes = "";
  textCantidad = "";

  //Insertar Profesor
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
  completo = "registración exitosa";
  error = "Ya hay un profesor con ese nombre";

  constructor(private router: Router,
    public insertService: InsertService,
    public insertarServiceEs: EstudiantesService) {

    if (this.textProfesor != "") {
      this.InsertarProfesoresss();
    }
  }
  ngOnInit(): void {
  }

  regresar() {
    this.router.navigate(['menu/profesores']);
  }

  InsertarProfesoresss() {
    this.insertService.postProfesores({ profesores: this.textProfesor, area: this.textArea, edad: this.textEdad, nacimiento: this.textNacimiento, sexo: this.seleccionados }).subscribe((resultado: any) => {
      this.insertarProfesor = resultado;
      this.router.navigate(['menu/profesores']);
      alert(this.completo);
    }, (error: HttpErrorResponse) => {
      if (error.status == 404) {
        alert(this.error);
      }
    });
  }

  InsertarEstudiantes() {
    this.insertarServiceEs.postEstudiantes({ estudiantes: this.textProfesor, cantidad: this.textArea, edad: this.textEdad, fecha: this.textNacimiento, sexo: this.seleccionados }).subscribe((resultado: any) => {
      this.insertarServiceEs = resultado;
      alert(this.completo);
      this.router.navigate(['menu/profesores']);
    })
  }
}