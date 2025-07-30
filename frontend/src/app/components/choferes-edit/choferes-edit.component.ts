import { Component, OnInit } from '@angular/core';
import { choferes } from '../../interfaces/user.interface';
import { ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-choferes-edit',
  templateUrl: './choferes-edit.component.html',
  styleUrls: ['./choferes-edit.component.css']
})
export class ChoferesEditComponent implements OnInit {
valorInput: number | undefined;
  TUser: any = [];
  user: choferes = {
    cchofer: null,
    ctransportista: null,
    identificacion: null,
    nombres: null,
    apellidos: null,
    telefono: null,
    permiso: null,
    fecha: null,
    estado: 'ACTIVO'
  };

  TransportistasList: any;
  TransportistasListFull: any;

@ViewChild('formularioNgForm') formularioNgForm!: NgForm;

constructor(private Data: DataService,
  private router: Router,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarTransportistas();
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'],'/choferes')
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

    this.Data.update(this.user.cchofer!, this.user,'/choferes')
      .subscribe(
        res => {
          const modal = new bootstrap.Modal(document.getElementById('modalActualizado'));
          modal.show();
          this.router.navigate(['/choferes']);
        },
        err => console.error(err)
      );
    } 

    cargarTransportistas(): void {
      this.Data.getDropListTransportistas().subscribe((data: any) => {
        this.TransportistasListFull = data; // todos los empleados
        this.TransportistasList = data.filter((emp: any) => emp.estado === 'ACTIVO'); // solo activos
      });
    }
  
    getDropListTransportistas() {
      this.Data.getDropListTransportistas().subscribe((data:any)=>{
        this.TransportistasList=data;
      })
    }
}
