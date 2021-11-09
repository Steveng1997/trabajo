import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MostrarReService {

  urlApi = 'http://localhost:9000/api/';

  constructor(public http: HttpClient) { }

  getRegistro():any {
    let url = this.urlApi + 'registro/todoslosregistros';
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }))
  }

  getRegistroByUno(id: number): any {
    let url = this.urlApi + 'registro/todoporId/' + id;
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }))
  }

  deleteRegitro(id: any): Observable<any> {
    let url = this.urlApi + 'registro/eliminarRegistros/' + id;
    return this.http.delete(url).pipe(map(resultado => {
      return resultado;
    }));
  }
}