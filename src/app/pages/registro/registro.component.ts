import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/servicios/registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: '../registro/registro.component.html',
  styleUrls: ['../registro/registro.component.css']
})
export class RegistroComponent implements OnInit {

  insertarDatos: any = [];
  textNombre = "";
  textcontrasena = "";
  textEdad = "";
  textFecha = "";
  nombre: any = [];
  contrasena: any = [];
  edad: any = [];
  fecha: any = [];
  seleccionados = "";
  completo = "Registro Completo";
  error = "Ya hay un usuario con ese nombre";
  incompletoNombre = "Verificar si el campo nombre no este vació";
  incompletoContraseña = "Verificar si el campo contraseña no este vació";
  incompletoEdad = "Verificar si el campo edad no este vació";
  incompletoFecha = "Verificar si el campo fecha no este vació";
  incompletoSexo = "Verificar si se escogió un sexo";

  constructor(private router: Router,
    public registroService: RegistroService) { }

  ngOnInit(): void { }

  login() {
    this.router.navigate(['login']);
  }

  InsertarRegistro() {
    if (this.textNombre != null && this.textNombre != "" ) {
      if (this.textcontrasena != null && this.textcontrasena != "") {
        if (this.textEdad != null && this.textEdad != "" ) {
          if (this.textFecha != null && this.textFecha != "") {
            if (this.seleccionados != null && this.seleccionados != "") {
              this.registroService.postRegistro({ nombre: this.textNombre, contrasena: this.textcontrasena, edad: this.textEdad, fecha: this.textFecha, sexo: this.seleccionados }).subscribe((resultado: any) => {
                alert(this.completo);
                this.insertarDatos = resultado;
                this.router.navigate(['login']);
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
        alert(this.incompletoContraseña);
      }
    } else {
      alert(this.incompletoNombre);
    }
  }
}