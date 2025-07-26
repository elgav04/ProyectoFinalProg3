import { Component, OnInit } from '@angular/core';
import { empresas } from '../../interfaces/user.interface';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empresas-edit',
  templateUrl: './empresas-edit.component.html',
  styleUrls: ['./empresas-edit.component.css']
})
export class EmpresasEditComponent implements OnInit {
  
  valorInput: number | undefined;
  TUser: any = [];
  user: empresas = {
    empresa: null,
    cempresa: null,
    identificacion: null,
    direccion: null,
    telefono: null,
    extension: null,
    correo: null,
    fecha: null,
    estado: 'ACTIVO'
  };

  constructor(private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      const params = this.activatedRoute.snapshot.params;
  
      if (params['id']) {
        this.Data.getOne(params['id'],'/empresas')
          .subscribe(
            res => {
              this.user = res;
            },
            err => console.log(err)
          );
      }
    }

    updateUser() {
      this.Data.update(this.user.cempresa!, this.user,'/empresas')
        .subscribe(
          res => {
            this.router.navigate(['/empresas']);
          },
          err => console.error(err)
        );
      }  
    }
  
