import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  public minuto: number = 0;
  public segundos: number = 0;

  constructor(private router: Router,) { this.start() }

  start() {
    setInterval(() => {
      this.segundos += 1;
      if (this.segundos == 13) {
        this.segundos = 0;
        this.minuto += 1;
        if (this.minuto == 60) {
          this.minuto = 0;
          this.router.navigate(['login']);
        }
      }
    });
  }

  ngOnInit(): void {
  }

}
