import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { transportistas } from 'src/app/interfaces/user.interface';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { DatePipe } from '@angular/common';
import { saveAs } from 'file-saver';

declare var bootstrap: any;

@Component({
  selector: 'app-transportistas',
  templateUrl: './transportistas.component.html',
  styleUrls: ['./transportistas.component.css'],
  providers: [DatePipe]
})
export class TransportistasComponent implements OnInit {
  TUser: any = [];
  user: transportistas = {
    ctransportista: null,
    descripcion: null,
    identificacion: null,
    direccion: null,
    telefono: null,
    correo: null,
    observaciones: null,
    fecha: null,
    cantidadv: null,
    porcentaje: null,
    estado: 'ACTIVO'
  }

  filterPost = '';
  name = 'Transportistas.xlsx';

  @ViewChild('formularioNgForm') formularioNgForm!: NgForm;

  constructor(private Data: DataService, private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/transportistas')
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

    delete this.user.ctransportista;   
    this.Data.save(this.user,'/transportistas')
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
    this.Data.delete(id, '/transportistas')
      .subscribe(
        res => {
          this.getUser();

          const modal = new bootstrap.Modal(document.getElementById('modalEliminado'));
          modal.show();
        },
        err => console.error(err)
      );
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
      PDF.save('transportistas.pdf');
    });
  }

  imprimirPDF() {
  
    const doc = new jsPDF('landscape');
    doc.setFontSize(22);
    doc.text('Listado de Transportistas Registrados', 90, 15, { align: 'center' });
    doc.setFontSize(16);
    doc.text(`Fecha de impresión: ${this.datePipe.transform(new Date(), 'dd/MM/yyyy')}`, 90, 25, { align: 'center' });
  
    const tableData = this.TUser.map((transportistas: transportistas) => [
      transportistas.ctransportista?.toString() || 'N/A',
      transportistas.descripcion || 'N/A',
      transportistas.identificacion || 'N/A',
      transportistas.direccion || 'N/A',
      transportistas.telefono || 'N/A',
      transportistas.correo || 'N/A',
      transportistas.observaciones || 'N/A',
      transportistas.fecha || 'N/A',
      transportistas.cantidadv || 'N/A',
      transportistas.porcentaje || 'N/A',
      transportistas.estado || 'N/A'
  
    ]);
    
    
    import('jspdf-autotable').then((autoTable) => {
      
      autoTable.default(doc, {
        
        head: [['ID', 'TRANSPORTISTA','IDENTIFICACIÓN','DIRECCIÓN','TELÉFONO','CORREO','OBSERVACIONES','FECHA','CANT VEHÍCULOS','PORCENTAJE %','ESTADO']],
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
      
  
      doc.save('listado-transportistas.pdf');
      alert('Se ha generado el PDF');  
    });
  }
 
}
