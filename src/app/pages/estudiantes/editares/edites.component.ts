import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante.model';
import { EditesService } from 'src/app/servicios/editar/edites.service';

@Component({
  selector: 'app-edites',
  templateUrl: '../editares/edites.component.html',
  styleUrls: ['../editares/edites.component.css']
})
export class EditesComponent implements OnInit {

  insertarProfesor: any = [];
  textEstudiante = "";
  textCelular = "";
  textEdad = "";
  textNacimiento = "";
  estudiantes: any = [];
  celular: any = [];
  edad: any = [];
  fecha: any = [];
  seleccionados: string[] = [];
  completo = "Estudiante actualizado";

  modificarestudiante: any = [];
  id!: number;

  //llena tabla
  estudiantetab: any = [];

  //Filtrar
  datoestudiante: any = [];

  ConsultarporId: any = [];

  constructor(private router: Router,
    public editesService: EditesService,
    private route: ActivatedRoute) {
    this.procesos();
  }

  ngOnInit(): void {
    this.cargar(this.route.snapshot.params['estudiantes']);
  }

  procesos() {
    this.cargarEstudiantes();
  }

  regresar() {
    this.router.navigate(['menu/estudiantes']);
  }  

  cargar(estudiantes: string) {
    this.editesService.getEstudiantesByUno(estudiantes).subscribe((estudiante: Estudiante) => {
      this.id = estudiante.id;
      this.seleccionados = [];
      this.ConsultarporId = estudiante;
      this.textEstudiante = estudiante.estudiantes;
      this.textCelular = estudiante.celular;
      this.textEdad = estudiante.edad;
      this.textNacimiento = estudiante.fecha;
      this.seleccionados.push(estudiante.sexo ? "1" : "0");
    });
  }

  cargarEstudiantes() {
    this.editesService.getEstudiantes().subscribe((resultado: any) => {
      this.estudiantetab = resultado;
      this.datoestudiante = resultado;
    })
  }

  ModificarEstudiante() {
    const estud = new Estudiante();
    estud.estudiantes = this.textEstudiante;
    estud.celular = this.textCelular.toString();
    estud.edad = this.textEdad;
    estud.fecha = this.textNacimiento;
    estud.sexo = this.seleccionados;
    console.log(this.seleccionados);
    this.editesService.putEstudiantes(estud, this.id).subscribe((resultadoPut: Estudiante) => {
      this.modificarestudiante = Estudiante;
      this.procesos();
      this.router.navigate(['menu/estudiantes']);
      alert(this.completo);
    });
  }
}