import { Component, OnInit } from '@angular/core';
import { usuarios } from '../../interfaces/user.interface';
import { ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.css']
})
export class UsuariosEditComponent implements OnInit {
  valorInput: number | undefined;
  TUser: any = [];
  user: usuarios = {
    cusuario: null,
    ctipousuario: null,
    cempleado: null,
    usuario: null,
    clave: null,
    fecha: null,
    estado: 'ACTIVO'
  };

  TiposuariosList: any;
  TiposuariosListFull: any;
  EmpleadosList: any;
  EmpleadosListFull: any;

  @ViewChild('formularioNgForm') formularioNgForm!: NgForm;
  
  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.cargarTipousuarios();
      this.cargarEmpleados();
      const params = this.activatedRoute.snapshot.params;
  
      if (params['id']) {
        this.Data.getOne(params['id'],'/usuarios')
          .subscribe(
            (res: any) => {
              if (res.fecha) {
                // Convertir fecha a yyyy-MM-dd para input date
                res.fecha = formatDate(res.fecha, 'yyyy-MM-dd', 'en-US');
              }
              this.user = res;
            },
            err => console.log(err)
          );
      }
    }
  
    updateUser() {
      if (!this.formularioNgForm.valid) {
        console.warn('Formulario inválido');
        this.formularioNgForm.control.markAllAsTouched();
        return;
      }
  
      this.Data.update(this.user.cusuario!, this.user,'/usuarios')
        .subscribe(
          res => {
            const modal = new bootstrap.Modal(document.getElementById('modalActualizado'));
            modal.show();
            this.router.navigate(['/usuarios']);
          },
          err => console.error(err)
        );
      } 

      cargarTipousuarios(): void {
        this.Data.getDropListTipousuarios().subscribe((data: any) => {
          this.TiposuariosListFull = data; // todos los empleados
          this.TiposuariosList = data.filter((emp: any) => emp.estado === 'ACTIVO'); // solo activos
        });
      }
    
      getDropListTipousuarios() {
        this.Data.getDropListTipousuarios().subscribe((data:any)=>{
          this.TiposuariosList=data;
        })
      }

      cargarEmpleados(): void {
        this.Data.getDropListEmpleados().subscribe((data: any) => {
          this.EmpleadosListFull = data; // todos los empleados
          this.EmpleadosList = data.filter((emp: any) => emp.estado === 'ACTIVO'); // solo activos
        });
      }
    
      getDropListEmpleados() {
        this.Data.getDropListEmpleados().subscribe((data:any)=>{
          this.EmpleadosList=data;
        })
      }
}
