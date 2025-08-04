import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { cargas } from 'src/app/interfaces/user.interface';
import { DataService } from '../../services/data.service';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { DatePipe } from '@angular/common';
import { saveAs } from 'file-saver';

declare var bootstrap: any;


@Component({
  selector: 'app-cargas',
  templateUrl: './cargas.component.html',
  styleUrls: ['./cargas.component.css'],
  providers: [DatePipe]
})
export class CargasComponent implements OnInit {
  TUser: any = [];
  user: cargas = {
    ccarga: null,
    cpais: null,
    cbroker: null,
    ctransportista: null,
    ctipov: null,
    cchofer: null,
    cempleado: null,
    cempresa: null,
    warorigen: null,
    wardestino: null,
    origen: null,
    destino: null,
    distancia: null,
    peso: null,
    preciocarga: null,
    precioprom: null,
    fecha: null,
    pickup: null,
    dropoff: null,
    cestcarga: null,
    loadnumber: null,
    contactobrok: null,
    telefonobrok: null,
    estado: 'ACTIVO'
  };

  filterPost = '';
  name = 'Cargas.xlsx';

  PaisesList: any;
  PaisesListFull: any;
  BrokersList: any;
  BrokersListFull: any;
  TransportistasList: any;
  TransportistasListFull: any;
  TipovehiculosList: any;
  TipovehiculosListFull: any;
  ChoferesList: any;
  ChoferesListFull: any;
  EmpleadosList: any;
  EmpleadosListFull: any;
  EmpresasList: any;
  EmpresasListFull: any;
  WarehousesList: any;
  WarehousesListFull: any;

  @ViewChild('formularioNgForm') formularioNgForm!: NgForm;

  constructor(private Data: DataService, private datePipe:DatePipe) { }

  ngOnInit(): void {

    this.cargarPaises();
    this.cargarBrokers();
    this.cargarTransportistas();
    this.cargarTipovehiculos();
    this.cargarChoferes();
    this.cargarEmpleados();
    this.cargarEmpresas();
    this.cargarWarehouses();
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/cargas')
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

    delete this.user.ccarga;   
    this.Data.save(this.user,'/cargas')
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
    this.Data.delete(id, '/cargas')
      .subscribe(
        res => {
          this.getUser();

          const modal = new bootstrap.Modal(document.getElementById('modalEliminado'));
          modal.show();
        },
        err => console.error(err)
      );
  }

  //Paises
  cargarPaises(): void {
    this.Data.getDropListPaises().subscribe((data: any) => {
      this.PaisesListFull = data; // todos los empleados
      this.PaisesList = data.filter((emp: any) => emp.estado === 'ACTIVO'); // solo activos
    });
  }

  getDropListPaises() {
    this.Data.getDropListPaises().subscribe((data:any)=>{
      this.PaisesList=data;
    })
  }

  getPaisesPorId(id: number): string {
    const paises = this.PaisesListFull.find((emp: any) => emp.cpais === id);
    return paises ? paises.pais : 'Desconocido';
  }

  //Brokers
  cargarBrokers(): void {
    this.Data.getDropListBrokers().subscribe((data: any) => {
      this.BrokersListFull = data; // todos los empleados
      this.BrokersList = data.filter((emp: any) => emp.estado === 'ACTIVO'); // solo activos
    });
  }

  getDropListBrokers() {
    this.Data.getDropListBrokers().subscribe((data:any)=>{
      this.BrokersList=data;
    })
  }

  getBrokersPorId(id: number): string {
    const brokers = this.BrokersListFull.find((emp: any) => emp.cbroker === id);
    return brokers ? brokers.broker : 'Desconocido';
  }

  //Transportistas
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

  //TipoVehiculos
  cargarTipovehiculos(): void {
    this.Data.getDropListTipovehiculos().subscribe((data: any) => {
      this.TipovehiculosListFull = data; 
      this.TipovehiculosList = data.filter((emp: any) => emp.estado === 'ACTIVO'); // solo activos
    });
  }

  getDropListTipovehiculos() {
    this.Data.getDropListTipovehiculos().subscribe((data:any)=>{
      this.TipovehiculosList=data;
    })
  }

  getTipovehiculosPorId(id: number): string {
    const tipov = this.TipovehiculosListFull.find((emp: any) => emp.ctipov === id);
    return tipov ? tipov.tipo : 'Desconocido';
  }

  //Choferes
  cargarChoferes(): void {
    this.Data.getDropListChoferes().subscribe((data: any) => {
      this.ChoferesListFull = data; 
      this.ChoferesList = data.filter((emp: any) => emp.estado === 'ACTIVO'); // solo activos
    });
  }

  getDropListChoferes() {
    this.Data.getDropListChoferes().subscribe((data:any)=>{
      this.ChoferesList=data;
    })
  }

  getChoferesPorId(id: number): string {
    const chofer = this.ChoferesListFull.find((emp: any) => emp.cchofer === id);
    return chofer ? `${chofer.nombres} ${chofer.apellidos}` : 'Desconocido';
  }

  //Empleados
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

  //Empresas
  cargarEmpresas(): void {
    this.Data.getDropListEmpresas().subscribe((data: any) => {
      this.EmpresasListFull = data; 
      this.EmpresasList = data.filter((emp: any) => emp.estado === 'ACTIVO'); // solo activos
    });
  }

  getDropListEmpresas() {
    this.Data.getDropListEmpresas().subscribe((data:any)=>{
      this.EmpresasList=data;
    })
  }

  getEmpresasPorId(id: number): string {
    const empresas = this.EmpresasListFull.find((emp: any) => emp.cempresa === id);
    return empresas ? empresas.empresa : 'Desconocida';
  }

  //Warehouses
  cargarWarehouses(): void {
    this.Data.getDropListWarehouses().subscribe((data: any) => {
      this.WarehousesListFull = data; // todos los empleados
      this.WarehousesList = data.filter((emp: any) => emp.estado === 'ACTIVO'); // solo activos
    });
  }

  getDropListWarehouses() {
    this.Data.getDropListWarehouses().subscribe((data:any)=>{
      this.WarehousesList=data;
    })
  }

  getWarehousesPorId(id: number): string {
    const warehouse = this.WarehousesListFull.find((emp: any) => emp.cwarehouse === id);
    return warehouse ? warehouse.warehouse : 'Desconocido';
  }

  actualizarPrecioPromedio(): void {
    const precio = Number(this.user.preciocarga);
    const peso = Number(this.user.peso);
  
    if (!precio || !peso || peso === 0) {
      this.user.precioprom = null;
      return;
    }
  
    this.user.precioprom = parseFloat((precio / peso).toFixed(2));
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
      PDF.save('cargas.pdf');
    });
  }

  imprimirPDF() {
      
        const doc = new jsPDF('landscape');
        doc.setFontSize(22);
        doc.text('Listado de Cargas Registradas', 90, 15, { align: 'center' });
        doc.setFontSize(16);
        doc.text(`Fecha de impresión: ${this.datePipe.transform(new Date(), 'dd/MM/yyyy')}`, 90, 25, { align: 'center' });
      
        const tableData = this.TUser.map((cargas: cargas) => [
          cargas.ccarga?.toString() || 'N/A',  
          this.getPaisesPorId(cargas.cpais!) || 'N/A',
          this.getBrokersPorId(cargas.cbroker!) || 'N/A',
          this.getTransportistaPorId(cargas.ctransportista!) || 'N/A',
          this.getTipovehiculosPorId(cargas.ctipov!) || 'N/A',
          this.getChoferesPorId(cargas.cchofer!) || 'N/A',
          this.getEmpleadoPorId(cargas.cempleado!) || 'N/A',
          this.getEmpresasPorId(cargas.cempresa!) || 'N/A',
          this.getWarehousesPorId(cargas.warorigen!) || 'N/A',
          this.getWarehousesPorId(cargas.wardestino!) || 'N/A',
          cargas.origen || 'N/A',
          cargas.destino || 'N/A',
          cargas.distancia || 'N/A',
          cargas.peso || 'N/A',
          cargas.preciocarga || 'N/A',
          cargas.precioprom || 'N/A',
          cargas.fecha || 'N/A',
          cargas.pickup || 'N/A',
          cargas.dropoff || 'N/A',
          cargas.cestcarga || 'N/A',
          cargas.loadnumber || 'N/A',
          cargas.contactobrok || 'N/A',
          cargas.telefonobrok || 'N/A',
          cargas.estado || 'N/A'
        ]);
        
        
        import('jspdf-autotable').then((autoTable) => {
          
          autoTable.default(doc, {
            
            head: [['ID', 'PAIS','BROKER','TRANSPORTISTA','TIPO VEHÍCULO','CHOFER','RESPONSABLE','EMPRESA','WH ORIGEN','WH DESTINO','ORIGEN','DESTINO','DISTANCIA','PESO','PRECIO CARGA','PRECIO PROM','FECHA','PICKUP','DROPOFF','ESTADO CARGA','LOAD N','CONTACTO BK','TELÉFONO BK','ESTADO']],
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
          
      
          doc.save('listado-cargas.pdf');
          alert('Se ha generado el PDF');  
        });
      }
}
