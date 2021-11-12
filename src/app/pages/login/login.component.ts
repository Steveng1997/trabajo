import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: '../login/login.component.html',
  styleUrls: ['../login/login.component.css']
})
export class LoginComponent implements OnInit {

  consultarDatos: any = [];
  textNombre = "";
  textcontrasena = "";
  completo = "Usuario Logueado";
  error = "Usuario no registrado, por favor registrarse primero";
  incompletoNombre = "Verificar si el campo nombre no este vació"
  incompletoContrasena = "Verificar si el campo contraseña no este vació"
  vacio = "Los campos estan vació"

  constructor(private router: Router,
    public loginService: LoginService) { }

  ngOnInit(): void { }

  registro() {
    this.router.navigate(['registro']);
  }

  mostrarPassword() {
    var tipo: any = document.getElementById("textcontrasena");
      if(tipo.type == "password"){
          tipo.type = "text";
      }else{
          tipo.type = "password";
      }
  }

  ConsultarRegistro() {
    if (this.textNombre != "" || this.textcontrasena != "") {
      if (this.textNombre != null && this.textNombre != "") {
        if (this.textcontrasena != null && this.textcontrasena != "") {
          this.loginService.getRegistroNombre(this.textNombre, this.textcontrasena).subscribe((resultado: any) => {
            this.consultarDatos = resultado;
            alert(this.completo);
            this.router.navigate(['menu']);
          }, (error: HttpErrorResponse) => {
            if (error.status == 404) {
              alert(this.error);
            }
          });
        }
        else {
          alert(this.incompletoContrasena);
        }
      }
      else {
        alert(this.incompletoNombre);
      }
    } else {
      alert(this.vacio);
    }
  }
}