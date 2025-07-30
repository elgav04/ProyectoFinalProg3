import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { choferes } from 'src/app/interfaces/user.interface';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


declare var bootstrap: any;

@Component({
  selector: 'app-choferes',
  templateUrl: './choferes.component.html',
  styleUrls: ['./choferes.component.css']
})
export class ChoferesComponent implements OnInit {
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

  filterPost = '';
  name = 'Choferes.xlsx';
  TransportistasList: any;
  TransportistasListFull: any;

  @ViewChild('formularioNgForm') formularioNgForm!: NgForm;

  constructor(private Data: DataService) { }

  ngOnInit(): void {
    this.cargarTransportistas();
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/choferes')
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

    delete this.user.cchofer;   
    this.Data.save(this.user,'/choferes')
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
    this.Data.delete(id, '/choferes')
      .subscribe(
        res => {
          this.getUser();

          const modal = new bootstrap.Modal(document.getElementById('modalEliminado'));
          modal.show();
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

  getTransportistaPorId(id: number): string {
    const transportista = this.TransportistasListFull.find((emp: any) => emp.ctransportista === id);
    return transportista ? transportista.descripcion : 'Desconocido';
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
      PDF.save('choferes.pdf');
    });
  }
}
