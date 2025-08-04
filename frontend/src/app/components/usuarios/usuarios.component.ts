import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { usuarios } from 'src/app/interfaces/user.interface';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { DatePipe } from '@angular/common';
import { saveAs } from 'file-saver';


declare var bootstrap: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [DatePipe]
})
export class UsuariosComponent implements OnInit {
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

  constructor(private Data: DataService, private datePipe:DatePipe) { }

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

  imprimirPDF() {
      
    const doc = new jsPDF('landscape');
    doc.setFontSize(22);
    doc.text('Listado de Usuarios Registrados', 90, 15, { align: 'center' });
    doc.setFontSize(16);
    doc.text(`Fecha de impresión: ${this.datePipe.transform(new Date(), 'dd/MM/yyyy')}`, 90, 25, { align: 'center' });

    const tableData = this.TUser.map((usuarios: usuarios) => [
      usuarios.cusuario?.toString() || 'N/A',  
      this.getTipousuariosPorId(usuarios.ctipousuario!) || 'N/A',
      this.getEmpleadoPorId(usuarios.cempleado!) || 'N/A',
      usuarios.usuario || 'N/A',
      usuarios.clave || 'N/A',
      usuarios.fecha || 'N/A',
      usuarios.estado || 'N/A'

    ]);
    
    
    import('jspdf-autotable').then((autoTable) => {
      
      autoTable.default(doc, {
        
        head: [['ID', 'TIPO DE USUARIO','EMPLEADO','USUARIO','CLAVE','FECHA','ESTADO']],
        body: tableData,
        startY: 35,
        pageBreak: 'auto',
        margin: { left: 10 },
        styles: {
          fontSize: 8,
          cellPadding: 3,
          lineWidth: 0.5,
          lineColor: [0, 0, 0],
          overflow: 'ellipsize'
        },
        headStyles: {
          fillColor: [41, 128, 185],
          textColor: 255,
          fontStyle: 'bold'
        },
        alternateRowStyles: {
          fillColor: [245, 245, 245]
        },
        columnStyles: {
          0: { cellWidth: 10 },
          1: { cellWidth: 45 },
          2: { cellWidth: 45 },
          3: { cellWidth: 30 },
          4: { cellWidth: 45 },
          5: { cellWidth: 35 },
          6: { cellWidth: 23 },
        
          7: { cellWidth: 30 },
          
        },
        
        didDrawPage: (data) => {
          doc.setFontSize(10);
          
        }
      
      
      });
      

      doc.save('listado-usuarios.pdf');
      alert('Se ha generado el PDF');  
    });
  }
}
