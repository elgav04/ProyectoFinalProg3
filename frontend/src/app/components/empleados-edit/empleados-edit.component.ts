import { Component, OnInit } from '@angular/core';
import { empleados } from '../../interfaces/user.interface';
import { ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-empleados-edit',
  templateUrl: './empleados-edit.component.html',
  styleUrls: ['./empleados-edit.component.css']
})
export class EmpleadosEditComponent implements OnInit {
  valorInput: number | undefined;
  TUser: any = [];
user: empleados = {
  cempleado: null,
  ctipoemp: null,
  identificacion: null,
  nombres: null,
  apellidos: null,
  direccion: null,
  telefono: null,
  correo: null,
  fecha: null,
  porcentaje: null,
  estado: 'ACTIVO'
};

  EmpleadosList: any;
  EmpleadosListFull: any;

@ViewChild('formularioNgForm') formularioNgForm!: NgForm;

constructor(private Data: DataService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarTipoEmpleados();
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/empleados')
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

    this.Data.update(this.user.cempleado!, this.user,'/empleados')
      .subscribe(
        res => {
          const modal = new bootstrap.Modal(document.getElementById('modalActualizado'));
          modal.show();
          this.router.navigate(['/empleados']);
        },
        err => console.error(err)
      );
    } 

    cargarTipoEmpleados(): void {
      this.Data.getDropListTipoempleado().subscribe((data: any) => {
        this.EmpleadosListFull = data; // todos los empleados
        this.EmpleadosList = data.filter((emp: any) => emp.estado === 'ACTIVO'); // solo activos
      });
    }
  
    getDropListTipoempleado() {
      this.Data.getDropListTipoempleado().subscribe((data:any)=>{
        this.EmpleadosList=data;
      })
    }

}
