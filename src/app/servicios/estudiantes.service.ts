import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  urlApi = 'http://localhost:9000/api/';

  constructor(public http: HttpClient) { }

  getEstudiantes():any {
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

  postEstudiantes(user: any): Observable<any> {
    let url = this.urlApi + 'estudiantes/insertarEstudiantes';
    return this.http.post(url, user).pipe(map(resultado => {
      return resultado;
    }));
  }

  deleteEstudiantes(id: any): Observable<any> {
    let url = this.urlApi + 'estudiantes/eliminarEstudiantes/' + id;
    return this.http.delete(url).pipe(map(resultado => {
      return resultado;
    }));
  }
}