import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { choferes } from 'src/app/interfaces/user.interface';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { DatePipe } from '@angular/common';
import { saveAs } from 'file-saver';


declare var bootstrap: any;

@Component({
  selector: 'app-choferes',
  templateUrl: './choferes.component.html',
  styleUrls: ['./choferes.component.css'],
  providers: [DatePipe]
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

  constructor(private Data: DataService, private datePipe:DatePipe) { }

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

   imprimirPDF() {
    
      const doc = new jsPDF('landscape');
      doc.setFontSize(22);
      doc.text('Listado de Choferes Registrados', 90, 15, { align: 'center' });
      doc.setFontSize(16);
      doc.text(`Fecha de impresión: ${this.datePipe.transform(new Date(), 'dd/MM/yyyy')}`, 90, 25, { align: 'center' });
    
      const tableData = this.TUser.map((choferes: choferes) => [
        choferes.cchofer?.toString() || 'N/A',  
        this.getTransportistaPorId(choferes.ctransportista!) || 'N/A',
        choferes.identificacion || 'N/A',
        choferes.nombres || 'N/A',
        choferes.apellidos || 'N/A',
        choferes.telefono || 'N/A',
        choferes.permiso || 'N/A',
        choferes.fecha || 'N/A',
        choferes.estado || 'N/A'
    
      ]);
      
      
      import('jspdf-autotable').then((autoTable) => {
        
        autoTable.default(doc, {
          
          head: [['ID', 'TRANSPORTISTA','IDENTIFICACIÓN','NOMBRES','APELLIDOS','TELÉFONO','PERMISO','FECHA','ESTADO']],
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
        
    
        doc.save('listado-choferes.pdf');
        alert('Se ha generado el PDF');  
      });
    }
}
