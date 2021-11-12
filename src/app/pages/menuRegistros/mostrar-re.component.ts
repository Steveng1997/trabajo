import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registros } from 'src/app/models/registro.model';
import { MostrarReService } from 'src/app/servicios/mostrar-re.service';

@Component({
  selector: 'app-mostrar-re',
  templateUrl: '../menuRegistros/mostrar-re.component.html',
  styleUrls: ['../menuRegistros/mostrar-re.component.css']
})
export class MostrarReComponent implements OnInit {

  public search: string = "";
  public page: number = 0;

  public registross!: [];

  public mostrarLabel = false;
  public ocultarLabel = false;

  //Consultar
  ConsultarporId: any = [];

  //Llena tabla
  regitrotab: Registros[] = [];

  textProfesor = "";
  textcontrasena = "";
  textEdad = "";
  textNacimiento = "";
  profesores: any = [];
  contrasena: any = [];
  edad: any = [];
  fecha: any = [];
  seleccionados: string[] = [];

  //Eliminar
  id: any = [];
  eliminarDatos: any = [];
  eliminado = "Registro Eliminado";

  constructor(private router: Router,
    public mostrarService: MostrarReService,) {
    this.cargarRegistros();

    if (this.id != 0) {
      this.EliminarProfesores(this.id);
    }
  }

  ngOnInit(): void { }

  ir() {
    this.router.navigate(['insertregis']);
  }

  cargarRegistros() {
    this.mostrarService.getRegistro().subscribe((resultado: Registros[]) => {
      this.regitrotab = resultado;
      this.regitrotab.map(q => {
        q.edad = q.edad.toString();
      });
    })
  }

  ConsultarporIds(id: number) {
    this.mostrarService.getRegistroByUno(id).subscribe((registro: Registros) => {
      this.seleccionados = [];
      this.ConsultarporId = registro;
      this.textProfesor = registro.nombre;
      this.textcontrasena = registro.contrasena;
      this.textEdad = registro.edad;
      this.seleccionados.push(registro.sexo ? "1" : "0");
      this.router.navigate(['editregis/' + id])
    });
  }

  EliminarProfesores(id: number) {
    this.mostrarService.deleteRegitro(id).subscribe(() => {
      this.eliminarDatos = delete (this.eliminarDatos);
      this.cargarRegistros();
      alert(this.eliminado);
    });
  }

  aparecer() {
    this.mostrarLabel = true;
    this.ocultarLabel = true;
  }

  ocultar() {
    this.mostrarLabel = false;
    this.ocultarLabel = false;
  }

  onSearchRegistros(search: string) {
    if (search.length > 0) {
      this.regitrotab = this.regitrotab.filter((cantd: Registros) => cantd.nombre.includes(search));
    }
    else {
      this.cargarRegistros();
    }
  }

  onSearchContrasena(searchContrasena: string) {
    if (searchContrasena.length > 0) {
      this.regitrotab = this.regitrotab.filter((cantd: Registros) => cantd.contrasena.includes(searchContrasena));
    }
    else {
      this.cargarRegistros();
    }
  }

  onSearchEdad(searchEdad: string) {
    if (searchEdad.length > 0) {
      this.regitrotab = this.regitrotab.filter((cantd: Registros) => cantd.edad.includes(searchEdad));
    }
    else {
      this.cargarRegistros();
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