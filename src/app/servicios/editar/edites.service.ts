import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EditesService {

  urlApi = 'http://localhost:9000/api/';

  constructor(public http: HttpClient) { }

  getEstudiantes() {
    let url = this.urlApi + 'estudiantes/todoslosestudiantes';
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }))
  }

  getEstudiantesByUno(estudiantes: string): any {
    let url = this.urlApi + 'estudiantes/todoporId/' + estudiantes;
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }))
  }

  putEstudiantes(user: any, id: number): Observable<any> {
    let url = this.urlApi + 'estudiantes/modificarEstudiantes/'+id;
    return this.http.put(url, user).pipe(map(resultado => {
      return resultado;
    }));
  }
}
