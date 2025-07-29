import { Component, OnInit } from '@angular/core';
import { paises } from '../../interfaces/user.interface';
import { ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

declare var bootstrap: any;


@Component({
  selector: 'app-paises-edit',
  templateUrl: './paises-edit.component.html',
  styleUrls: ['./paises-edit.component.css']
})
export class PaisesEditComponent implements OnInit {
valorInput: number | undefined;
  TUser: any = [];
  user: paises = {
    cpais: null,
    pais: null,
    estado: 'ACTIVO'
  };

  @ViewChild('formularioNgForm') formularioNgForm!: NgForm;

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      const params = this.activatedRoute.snapshot.params;
  
      if (params['id']) {
        this.Data.getOne(params['id'],'/paises')
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

      this.Data.update(this.user.cpais!, this.user,'/paises')
        .subscribe(
          res => {
            const modal = new bootstrap.Modal(document.getElementById('modalActualizado'));
            modal.show();
            this.router.navigate(['/paises']);
          },
          err => console.error(err)
        );
      } 
}
