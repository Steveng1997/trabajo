import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  urlApi = 'http://localhost:9000/api/';

  constructor(public http: HttpClient) { }

  postProfesores(user: any): Observable<any> {
    let url = this.urlApi + 'profesores/insertarProfesores';
    return this.http.post(url, user).pipe(map(resultado => {
      return resultado;
    }));
  }
}
