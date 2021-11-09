import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertesService } from 'src/app/servicios/insertar/insertes.service';

@Component({
  selector: 'app-insertes',
  templateUrl: '../html/insertarhtml/insertes.component.html',
  styleUrls: ['../css/insertar/insertes.component.css']
})
export class InsertesComponent implements OnInit {

  //Insertar
  insertarEstudiantes: any = [];
  textEstudiantes = "";
  textCantidad = "";
  textEdad = "";
  textNacimiento = "";
  profesores: any = [];
  cantidad: any = [];
  edad: any = [];
  fecha: any = [];
  seleccionados: string[] = [];
  completo = "registración exitosa";
  error = "Ya hay un estudiante con ese nombre";

  constructor(private router: Router,
    public insertesService: InsertesService,) {

    if (this.textEstudiantes != "") {
      this.insertarEstudiantess();
    }
  }
  ngOnInit(): void {
  }

  regresar() {
    this.router.navigate(['menu/estudiantes']);
  }

  insertarEstudiantess() {
    this.insertesService.postEstudiantes({ estudiantes: this.textEstudiantes, cantidad: this.textCantidad, edad: this.textEdad, fecha: this.textNacimiento, sexo: this.seleccionados }).subscribe((resultado: any) => {
      this.insertarEstudiantes = resultado;
      this.router.navigate(['menu/estudiantes']);
      alert(this.completo);
    }, (error: HttpErrorResponse) => {
      if (error.status == 404) {
        alert(this.error);
      }
    });
  }
}