import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  urlApi = 'http://localhost:9000/api/';

  constructor(public http: HttpClient) { }

  getProfesores():any {
    let url = this.urlApi + 'profesores/todoslosprofesores';
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }))
  }

  getProfesoresByUno(profesores: string):any {
    let url = this.urlApi + 'profesores/todoporId/'+profesores;
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }))
  }
  
  deleteProfesores(id: any): Observable<any> {
    let url = this.urlApi + 'profesores/eliminarProfesores/'+id;
    return this.http.delete(url).pipe(map(resultado => {
      return resultado;
    }));
  }
}