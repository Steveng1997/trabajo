import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: '../html/login.component.html',
  styleUrls: ['../css/login.component.css']
})
export class LoginComponent implements OnInit {

  consultarDatos: any = [];
  textNombre = "";
  textcontrasena = "";
  completo = "Usuario Logueado";
  error = "Usuario no registrado, por favor registrarse primero";
  incompletoNombre = "Verificar si el campo nombre no este vació"
  incompletoContrasena = "Verificar si el campo contraseña no este vació"

  constructor(private router: Router,
    public loginService: LoginService) { }

  ngOnInit(): void { }

  registro() {
    this.router.navigate(['registro']);
  }

  ConsultarRegistro() {
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
  }
}