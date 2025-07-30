import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpresasComponent} from './components/empresas/empresas.component';
import { EmpresasEditComponent} from './components/empresas-edit/empresas-edit.component';

import { TipousuariosComponent } from './components/tipousuarios/tipousuarios.component';
import { TipousuariosEditComponent} from './components/tipousuarios-edit/tipousuarios-edit.component';

import { TipoempleadoComponent } from './components/tipoempleado/tipoempleado.component';
import { TipoempleadoEditComponent } from './components/tipoempleado-edit/tipoempleado-edit.component';

import { TipovehiculosComponent } from './components/tipovehiculos/tipovehiculos.component';
import { TipovehiculosEditComponent } from './components/tipovehiculos-edit/tipovehiculos-edit.component';

import { PaisesComponent } from './components/paises/paises.component';
import { PaisesEditComponent } from './components/paises-edit/paises-edit.component';

import { BrokersComponent } from './components/brokers/brokers.component';
import { BrokersEditComponent } from './components/brokers-edit/brokers-edit.component';

import { WarehousesComponent } from './components/warehouses/warehouses.component';
import { WarehousesEditComponent } from './components/warehouses-edit/warehouses-edit.component';

import { TransportistasComponent } from './components/transportistas/transportistas.component';
import { TransportistasEditComponent } from './components/transportistas-edit/transportistas-edit.component';

import { EmpleadosComponent } from './components/empleados/empleados.component';
import { EmpleadosEditComponent } from './components/empleados-edit/empleados-edit.component';

import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuariosEditComponent } from './components/usuarios-edit/usuarios-edit.component';

import { ChoferesComponent } from './components/choferes/choferes.component';
import { ChoferesEditComponent } from './components/choferes-edit/choferes-edit.component';

const routes: Routes = [
  {
    path: 'empresas',
    component :EmpresasComponent
  },
  {
    path: 'empresas/edit/:id',
    component :EmpresasEditComponent
  },
  {
    path: 'tipousuarios',
    component :TipousuariosComponent
  },
  {
    path: 'tipousuarios/edit/:id',
    component :TipousuariosEditComponent
  },
  {
    path: 'tipoempleado',
    component :TipoempleadoComponent
  },
  {
    path: 'tipoempleado/edit/:id',
    component :TipoempleadoEditComponent
  },
  {
    path: 'tipovehiculos',
    component :TipovehiculosComponent
  },
  {
    path: 'tipovehiculos/edit/:id',
    component :TipovehiculosEditComponent
  },
  {
    path: 'paises',
    component :PaisesComponent
  },
  {
    path: 'paises/edit/:id',
    component :PaisesEditComponent
  },
  {
    path: 'brokers',
    component :BrokersComponent
  },
  {
    path: 'brokers/edit/:id',
    component :BrokersEditComponent
  },
  {
    path: 'warehouses',
    component :WarehousesComponent
  },
  {
    path: 'warehouses/edit/:id',
    component :WarehousesEditComponent
  },
  {
    path: 'transportistas',
    component :TransportistasComponent
  },
  {
    path: 'transportistas/edit/:id',
    component :TransportistasEditComponent
  },
  {
    path: 'empleados',
    component :EmpleadosComponent
  },
  {
    path: 'empleados/edit/:id',
    component :EmpleadosEditComponent
  },
  {
    path: 'usuarios',
    component :UsuariosComponent
  },
  {
    path: 'usuarios/edit/:id',
    component :UsuariosEditComponent
  },
  {
    path: 'choferes',
    component :ChoferesComponent
  },
  {
    path: 'choferes/edit/:id',
    component :ChoferesEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
