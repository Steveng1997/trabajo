import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertregisService {

  urlApi = 'http://localhost:9000/api/';

  constructor(public http: HttpClient) { }

  postRegistro(user: any): Observable<any> {
    let url = this.urlApi + 'registro/insertarRegistro';
    return this.http.post(url, user).pipe(map(resultado => {
      return resultado;
    }));
  }
}
