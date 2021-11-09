import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PadresService {

  urlApi = 'http://localhost:9000/api/';

  constructor(public http: HttpClient) { }

  getPadres():any {
    let url = this.urlApi + 'padres/todoslospadres';
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }))
  }
}
