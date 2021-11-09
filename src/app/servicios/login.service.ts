import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { RouterState } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlApi = 'http://localhost:9000/api/';

  constructor(public http: HttpClient) { }

  getRegistroNombre(nombre: string, contrasena: string): Observable<any> {
    let url = this.urlApi + 'registro/nombreRegistro/'+nombre + "/" + contrasena;
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }));
  }
}