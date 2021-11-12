import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Padres } from 'src/app/models/padres.model';
import { PadresService } from 'src/app/servicios/padres.service';

@Component({
  selector: 'app-padres',
  templateUrl: '../padres/padres.component.html',
  styleUrls: ['../padres/padres.component.css'],
})
export class PadresComponent implements OnInit {

  public stop = false;
  public stopA = false;

  public search: string = "";
  public page: number = 0;

  //Diferenciar
  public padress!: [];

  public mostrarLabel = false;
  public ocultarLabel = false;

  //Llenamos tabla
  padrestab: Padres[] = [];
  fin = "Fin";

  constructor(private router: Router,
    public padresService: PadresService) {
    ;
    this.cargarPadres();
  }

  ngOnInit(): void { }

  cargarPadres() {
    this.padresService.getPadres().subscribe((resultado: Padres[]) => {
      this.padrestab = resultado;
      this.padrestab.map(q => {
        q.edad = q.edad.toString();
      });
    })
  }

  aparecer() {
    this.mostrarLabel = true;
    this.ocultarLabel = true;
  }

  ocultar() {
    this.mostrarLabel = false;
    this.ocultarLabel = false;
  }

  onSearchPadres(search: string) {
    if (search.length > 0) {
      this.padrestab = this.padrestab.filter((padz: Padres) => padz.padres.includes(search));
    } else {
      this.cargarPadres();
    }
  }

  onSearchEmpleos(searchEmpleo: string) {
    if (searchEmpleo.length > 0) { //Esta linea consiste desde donde comenzamos a buscar la palabra.
      this.padrestab = this.padrestab.filter((padz: Padres) => padz.empleo.includes(searchEmpleo));
    } else {
      this.cargarPadres();
    }
  }

  onSearchEdad(searchEdad: string) {
    if (searchEdad.length > 0) { //Esta linea consiste desde donde comenzamos a buscar la palabra.
      this.padrestab = this.padrestab.filter((padz: Padres) => padz.edad.includes(searchEdad));
    } else {
      this.cargarPadres();
    }
  }

  nextPage() {
    if (this.page < this.padrestab.length) {
      this.page += 5;
    } else {
      this.stop = false;
      alert(this.fin);
    }
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 5
    } else {
      this.stopA = false;
      alert(this.fin);
    }
  }
}