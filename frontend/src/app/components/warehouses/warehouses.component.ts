import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { warehouses } from 'src/app/interfaces/user.interface';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

declare var bootstrap: any;

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css']
})
export class WarehousesComponent implements OnInit {
  TUser: any = [];
  user: warehouses = {
    cwarehouse: null,
    warehouse: null,
    direccion: null,
    telefono: null,
    contacto: null,
    horaapertura: null,
    horacierre: null,
    observaciones: null,
    estado: 'ACTIVO'
  };

filterPost = '';
name = 'Warehouses.xlsx';

@ViewChild('formularioNgForm') formularioNgForm!: NgForm;

constructor(private Data: DataService) { }

ngOnInit(): void {
  this.getUser();
}
getUser() {
  this.Data.getAll('/warehouses')
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

  delete this.user.cwarehouse;   
  this.Data.save(this.user,'/warehouses')
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
  this.Data.delete(id, '/warehouses')
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
    PDF.save('warehouses.pdf');
  });
}
}
