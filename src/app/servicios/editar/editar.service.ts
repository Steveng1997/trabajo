import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarService {

  urlApi = 'http://localhost:9000/api/';

  constructor(public http: HttpClient) { }

  getProfesores() {
    let url = this.urlApi + 'profesores/todoslosprofesores';
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }))
  }

  getProfesoresByUno(profesores: string): any {
    let url = this.urlApi + 'profesores/todoporId/' + profesores;
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }))
  }

  putProfesores(user: any, id: number): Observable<any> {
    let url = this.urlApi + 'profesores/modificarProfesores/'+id;
    return this.http.put(url, user).pipe(map(resultado => {
      return resultado;
    }));
  }
}