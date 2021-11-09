import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MadresService {

  urlApi = 'http://localhost:9000/api/';

  constructor(public http: HttpClient) { }

  getMadres():any {
    let url = this.urlApi + 'madres/todaslasmadres';
    return this.http.get(url).pipe(map(resultado => {
      return resultado;
    }))
  }
}