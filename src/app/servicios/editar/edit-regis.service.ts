import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditRegisService {

  urlApi = 'http://localhost:9000/api/';

  constructor(public http: HttpClient) { }

  getRegistros() {
    let url = this.urlApi + 'registro/todoslosregistros';
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }))
  }

  getRegistrosByUno(nombre: string): any {
    let url = this.urlApi + 'registro/todoporId/' + nombre;
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }))
  }

  putRegistros(user: any, id: number): Observable<any> {
    let url = this.urlApi + 'registro/modificarRegistros/'+id;
    return this.http.put(url, user).pipe(map(resultado => {
      return resultado;
    }));
  }
}