import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Registros } from 'src/app/models/registro.model';
import { EditRegisService } from '../servicios/editar/edit-regis.service'

@Component({
  selector: 'app-edit-regis',
  templateUrl: '../html/editarhtml/edit-regis.component.html',
  styleUrls: ['../css/editar/edit-regis.component.css']
})
export class EditRegisComponent implements OnInit {

  insertarProfesor: any = [];
  textNombre = "";
  textContrasena = "";
  textEdad = "";
  textNacimiento = "";
  nombre: any = [];
  contrasena: any = [];
  edad: any = [];
  fecha: any = [];
  seleccionados: string[] = [];
  completo = "Registro actualizado";

  modificarRegistro: any = [];
  id!: number;

  //llena tabla
  registroTab: any = [];

  //Filtrar
  datoRegistros: any = [];

  ConsultarporId: any = [];

  constructor(private router: Router,
    public editarRegistroServicio: EditRegisService,
    private route: ActivatedRoute) {
    this.cargarRegistros();

    if(this.seleccionados == null)
    {
      this.ModificarRegistro();
    }
  }

  ngOnInit(): void {
    this.cargar(this.route.snapshot.params['nombre']);
  }

  regresar() {
    this.router.navigate(['menu/mostrarregistro']);
  }

  cargar(registros: string) {
    this.editarRegistroServicio.getRegistrosByUno(registros).subscribe((registr: Registros) => {
      this.id = registr.id;
      this.seleccionados = [];
      this.ConsultarporId = registr;
      this.textNombre = registr.nombre;
      this.textContrasena = registr.contrasena;
      this.textEdad = registr.edad;
      this.textNacimiento = registr.fecha;
      this.seleccionados.push(registr.sexo ? "1" : "0");
    });
  }

  cargarRegistros() {
    this.editarRegistroServicio.getRegistros().subscribe((resultado: any) => {
      this.registroTab = resultado;
      this.datoRegistros = resultado;
    })
  }

  ModificarRegistro() {
    const registrar = new Registros();
    if (this.textNombre != "") {
      registrar.nombre = this.textNombre;
    }
    if (this.textContrasena != "") {
      registrar.contrasena = this.textContrasena;
    }
    if (this.textEdad != "") {
      registrar.edad = this.textEdad;
    }

    if (this.textNacimiento != "") {
      registrar.fecha = this.textNacimiento;
    }

    if (this.seleccionados != null) {
      registrar.sexo = this.seleccionados;
    }

    this.editarRegistroServicio.putRegistros(registrar, this.id).subscribe((resultadoPut: Registros[]) => {
      this.modificarRegistro = Registros;
      this.cargarRegistros();
      alert(this.completo);
      this.router.navigate(['menu/mostrarregistro']);
    });
  }
}