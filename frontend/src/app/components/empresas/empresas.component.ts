import { Component, OnInit } from '@angular/core';
import { empresas } from 'src/app/interfaces/user.interface';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
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
  }

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/empresas')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }

  AgregarValor(){
    delete this.user.cempresa;   
    this.Data.save(this.user,'/empresas')
       .subscribe(
         res => {
          this.getUser();
         },
         err => console.error(err)
       );
  }
  
  EliminarData(id: number){
    this.Data.delete(id, '/empresas')
      .subscribe(
        res => {
          this.getUser();
        },
        err => console.error(err)
      );
  }


}
