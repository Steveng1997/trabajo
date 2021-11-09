import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MadresService } from '../servicios/madres.service';
import { Madres } from 'src/app/models/madres.model';

@Component({
  selector: 'app-madres',
  templateUrl: '../html/madres.component.html',
  styleUrls: ['../css/madres.component.css']
})
export class MadresComponent implements OnInit {

  public search: string = "";
  public page: number = 0;

  public madress!: [];

  public mostrarLabel = false;
  public ocultarLabel = false;

  //Llenamos tabla
  madrestab: Madres[] = [];

  constructor(private router: Router,
    public madresService: MadresService,) {
    this.cargarMadres();
  }

  ngOnInit(): void {
  }

  cargarMadres() {
    this.madresService.getMadres().subscribe((resultado: Madres[]) => {
      this.madrestab = resultado;
      this.madrestab.map(q => {
        q.cantidad = q.cantidad.toString();
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

  onSearchMadres(searchMadres: string) {
    if (searchMadres.length > 0) {
      this.madrestab = this.madrestab.filter((cantd: Madres) => cantd.madres.includes(searchMadres));
    }
    else {
      this.cargarMadres();
    }
  }

  onSearchCantidad(searchCantidad: string) {
    if (searchCantidad.length > 0) {
      this.madrestab = this.madrestab.filter((cantd: Madres) => cantd.cantidad.includes(searchCantidad));
    }
    else {
      this.cargarMadres();
    }
  }

  onSearchEdad(searchEdad: string) {
    if (searchEdad.length > 0) {
      this.madrestab = this.madrestab.filter((cantd: Madres) => cantd.edad.includes(searchEdad));
    }
    else {
      this.cargarMadres();
    }
  }

  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if (this.page > 0)
      this.page -= 5;
  }
}