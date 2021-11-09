import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertregisService } from '../servicios/insertar/insertregis.service';

@Component({
  selector: 'app-insertregis',
  templateUrl: '../html/insertarhtml/insertregis.component.html',
  styleUrls: ['../css/insertar/insertregis.component.css']
})
export class InsertregisComponent implements OnInit {

  //Insertar
  insertarNombre: any = [];
  textNombre = "";
  textcontrasena = "";
  textEdad = "";
  textNacimiento = "";
  profesores: any = [];
  contrasena: any = [];
  edad: any = [];
  fecha: any = [];
  seleccionados: string[] = [];
  completo = "registración exitosa";
  error = "Ya hay un registro con ese nombre";

  constructor(private router: Router,
    public inserRegisService: InsertregisService,) {

    if (this.textNombre != "") {
      this.insertarRegistross();
    }
  }
  ngOnInit(): void {
  }
  regresar() {
    this.router.navigate(['menu/mostrarregistro']);
  }

  insertarRegistross() {
    this.inserRegisService.postRegistro({ nombre: this.insertarNombre, contrasena: this.textcontrasena, edad: this.textEdad, fecha: this.textNacimiento, sexo: this.seleccionados }).subscribe((resultado: any) => {
      this.insertarNombre = resultado;
      alert(this.completo);
      this.textNombre = "";
      this.textcontrasena = "";
      this.textEdad = "";
      this.textNacimiento = "";
      this.router.navigate(['menu/mostrarregistro']);
    }, (error: HttpErrorResponse) => {
      if (error.status == 404) {
        alert(this.error);
      }
    });
  }
}