import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MadresService } from 'src/app/servicios/madres.service';
import { Madres } from 'src/app/models/madres.model';

@Component({
  selector: 'app-madres',
  templateUrl: '../madres/madres.component.html',
  styleUrls: ['../madres/madres.component.css']
})
export class MadresComponent implements OnInit {

  public stop = false;
  public stopA = false;

  public search: string = "";
  public page: number = 0;

  //Diferenciar
  public madress!: [];

  public mostrarLabel = false;
  public ocultarLabel = false;

  //Llenamos tabla
  madrestab: Madres[] = [];
  fin = "Fin";

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
    } else {
      this.cargarMadres();
    }
  }

  onSearchEmpleo(searchEmpleo: string) {
    if (searchEmpleo.length > 0) {
      this.madrestab = this.madrestab.filter((cantd: Madres) => cantd.empleo.includes(searchEmpleo));
    } else {
      this.cargarMadres();
    }
  }

  onSearchEdad(searchEdad: string) {
    if (searchEdad.length > 0) {
      this.madrestab = this.madrestab.filter((cantd: Madres) => cantd.edad.includes(searchEdad));
    } else {
      this.cargarMadres();
    }
  }

  nextPage() {
    if (this.page < this.madrestab.length) {
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