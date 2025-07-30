import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { EmpresasEditComponent } from './components/empresas-edit/empresas-edit.component';
import { FilterempresaPipe } from './pipes/filterempresa.pipe';
import { TipousuariosComponent } from './components/tipousuarios/tipousuarios.component';
import { TipousuariosEditComponent } from './components/tipousuarios-edit/tipousuarios-edit.component';
import { FiltertipousuarioPipe } from './pipes/filtertipousuario.pipe';
import { TipoempleadoComponent } from './components/tipoempleado/tipoempleado.component';
import { TipoempleadoEditComponent } from './components/tipoempleado-edit/tipoempleado-edit.component';
import { FiltertipoempleadoPipe } from './pipes/filtertipoempleado.pipe';
import { TipovehiculosComponent } from './components/tipovehiculos/tipovehiculos.component';
import { TipovehiculosEditComponent } from './components/tipovehiculos-edit/tipovehiculos-edit.component';
import { FiltertipovehiculoPipe } from './pipes/filtertipovehiculo.pipe';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisesEditComponent } from './components/paises-edit/paises-edit.component';
import { FilterpaisPipe } from './pipes/filterpais.pipe';
import { BrokersComponent } from './components/brokers/brokers.component';
import { FilterbrokerPipe } from './pipes/filterbroker.pipe';
import { BrokersEditComponent } from './components/brokers-edit/brokers-edit.component';
import { WarehousesComponent } from './components/warehouses/warehouses.component';
import { WarehousesEditComponent } from './components/warehouses-edit/warehouses-edit.component';
import { FilterwarehousePipe } from './pipes/filterwarehouse.pipe';
import { TransportistasComponent } from './components/transportistas/transportistas.component';
import { TransportistasEditComponent } from './components/transportistas-edit/transportistas-edit.component';
import { FiltertransportistaPipe } from './pipes/filtertransportista.pipe';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadosEditComponent } from './components/empleados-edit/empleados-edit.component';
import { FilterempleadoPipe } from './pipes/filterempleado.pipe';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosEditComponent } from './components/usuarios-edit/usuarios-edit.component';
import { FilterusuarioPipe } from './pipes/filterusuario.pipe';
import { ChoferesComponent } from './components/choferes/choferes.component';
import { ChoferesEditComponent } from './components/choferes-edit/choferes-edit.component';
import { FilterchoferPipe } from './pipes/filterchofer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    EmpresasComponent,
    EmpresasEditComponent,
    FilterempresaPipe,
    TipousuariosComponent,
    TipousuariosEditComponent,
    FiltertipousuarioPipe,
    TipoempleadoComponent,
    TipoempleadoEditComponent,
    FiltertipoempleadoPipe,
    TipovehiculosComponent,
    TipovehiculosEditComponent,
    FiltertipovehiculoPipe,
    PaisesComponent,
    PaisesEditComponent,
    FilterpaisPipe,
    BrokersComponent,
    FilterbrokerPipe,
    BrokersEditComponent,
    WarehousesComponent,
    WarehousesEditComponent,
    FilterwarehousePipe,
    TransportistasComponent,
    TransportistasEditComponent,
    FiltertransportistaPipe,
    EmpleadosComponent,
    EmpleadosEditComponent,
    FilterempleadoPipe,
    UsuariosComponent,
    UsuariosEditComponent,
    FilterusuarioPipe,
    ChoferesComponent,
    ChoferesEditComponent,
    FilterchoferPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
