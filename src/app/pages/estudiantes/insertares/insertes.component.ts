import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertesService } from 'src/app/servicios/insertar/insertes.service';

@Component({
  selector: 'app-insertes',
  templateUrl: '../insertares/insertes.component.html',
  styleUrls: ['../insertares/insertes.component.css']
})
export class InsertesComponent implements OnInit {

  //Insertar
  insertarEstudiantes: any = [];
  textEstudiantes = "";
  textCelular = "";
  textEdad = "";
  textNacimiento = "";
  profesores: any = [];
  cantidad: any = [];
  edad: any = [];
  fecha: any = [];
  seleccionados = "";
  completo = "registración exitosa";
  error = "Ya hay un estudiante con ese nombre";
  incompletoEstudiante = "Verificar si el campo nombre no este vació";
  incompletoCelular = "Verificar si el campo contraseña no este vació";
  incompletoEdad = "Verificar si el campo edad no este vació";
  incompletoFecha = "Verificar si el campo fecha no este vació";
  incompletoSexo = "Verificar si se escogió un sexo";

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
    if (this.textEstudiantes != null && this.textEstudiantes != "") {
      if (this.textCelular != null && this.textCelular != "") {
        if (this.textEdad != null && this.textEdad != "") {
          if (this.textNacimiento != null && this.textNacimiento != "") {
            if (this.seleccionados != null && this.seleccionados != "") {
              this.insertesService.postEstudiantes({ estudiantes: this.textEstudiantes, cantidad: this.textCelular, edad: this.textEdad, fecha: this.textNacimiento, sexo: this.seleccionados }).subscribe((resultado: any) => {
                this.insertarEstudiantes = resultado;
                this.router.navigate(['menu/estudiantes']);
                alert(this.completo);
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
        alert(this.incompletoCelular);
      }
    } else {
      alert(this.incompletoEstudiante);
    }
  }
}