import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { usuarios } from 'src/app/interfaces/user.interface';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


declare var bootstrap: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent  implements OnInit {
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

  filterPost = '';
  name = 'Usuarios.xlsx';
  TiposuariosList: any;
  TiposuariosListFull: any;
  EmpleadosList: any;
  EmpleadosListFull: any;

  @ViewChild('formularioNgForm') formularioNgForm!: NgForm;

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.cargarTipousuarios();
    this.cargarEmpleados();
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/usuarios')
      .subscribe(res => {
          this.TUser = res;
        
        }, err => console.error(err));
  }

  AgregarValor(){
    if (!this.formularioNgForm.valid) {
      console.warn('Formulario inválido');
      console.log(this.formularioNgForm.controls);
      return;
    }

    delete this.user.cusuario;   
    this.Data.save(this.user,'/usuarios')
       .subscribe(
         res => {
          this.getUser();

          const modal = new bootstrap.Modal(document.getElementById('modalExito'));
          modal.show();

          if (this.formularioNgForm) {
            this.formularioNgForm.resetForm();
          }
         },
         err => console.error(err)
       );
  }
  
  EliminarData(id: number){
    this.Data.delete(id, '/usuarios')
      .subscribe(
        res => {
          this.getUser();

          const modal = new bootstrap.Modal(document.getElementById('modalEliminado'));
          modal.show();
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

  getTipousuariosPorId(id: number): string {
    const tipousuarios = this.TiposuariosListFull.find((emp: any) => emp.ctipousuario === id);
    return tipousuarios ? tipousuarios.tipousuario : 'Desconocido';
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

  getEmpleadoPorId(id: number): string {
    const empleado = this.EmpleadosListFull.find((emp: any) => emp.cempleado === id);
    return empleado ? `${empleado.nombres} ${empleado.apellidos}` : 'Desconocido';
  }

  exportToExcel(): void {
    let element = document.getElementById('tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.name);
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('tabla');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('usuarios.pdf');
    });
  }
}
