import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from 'src/app/servicios/insertar/insert.service';

@Component({
  selector: 'app-insert',
  templateUrl: '../insertarpro/insert.component.html',
  styleUrls: ['../insertarpro/insert.component.css']
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
  seleccionados = "";
  completo = "registración exitosa";
  error = "Ya hay un profesor con ese nombre";
  incompletoProfesor = "Verificar si el campo profesor no este vació";
  incompletoArea = "Verificar si el campo area no este vació";
  incompletoEdad = "Verificar si el campo edad no este vació";
  incompletoFecha = "Verificar si el campo fecha no este vació";
  incompletoSexo = "Verificar si se escogió un sexo";

  constructor(private router: Router,
    public insertService: InsertService) {

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
    if (this.textProfesor != null && this.textProfesor != "") {
      if (this.textArea != null && this.textArea != "") {
        if (this.textEdad != null && this.textEdad != "") {
          if (this.textNacimiento != null && this.textNacimiento != "") {
            if (this.seleccionados != null && this.seleccionados != "") {
              this.insertService.postProfesores({ profesores: this.textProfesor, area: this.textArea, edad: this.textEdad, nacimiento: this.textNacimiento, sexo: this.seleccionados }).subscribe((resultado: any) => {
                alert(this.completo);
                this.insertarProfesor = resultado;
                this.router.navigate(['menu/profesores']);
              }, (error: HttpErrorResponse) => {
                if (error.status == 404) {
                  alert(this.error);
                }
              });
            } else {
              alert(this.incompletoSexo);
            }
          } else {
            alert(this.incompletoFecha);
          }
        } else {
          alert(this.incompletoEdad);
        }
      } else {
        alert(this.incompletoArea);
      }
    } else {
      alert(this.incompletoProfesor);
    }
  }
}