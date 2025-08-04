import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { LoginComponent } from './components/login/login.component';
import { NoAutorizadoComponent } from './components/no-autorizado/no-autorizado.component';
import { HomeComponent } from './components/home/home.component';


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

import { CargasComponent } from './components/cargas/cargas.component';
import { CargasEditComponent } from './components/cargas-edit/cargas-edit.component';

const routes: Routes = [
  {
    path: 'home',
    component :HomeComponent
  },
  {
    path: 'login',
    component :LoginComponent
  },
  {
    path: 'no-autorizado',
    component :NoAutorizadoComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'empresas',
    component :EmpresasComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR', 'ASISTENTE OPERATIVO'] }
  },
  {
    path: 'empresas/edit/:id',
    component :EmpresasEditComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR', 'ASISTENTE OPERATIVO'] }
  },
  {
    path: 'tipousuarios',
    component :TipousuariosComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR'] }
  },
  {
    path: 'tipousuarios/edit/:id',
    component :TipousuariosEditComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR'] }
  },
  {
    path: 'tipoempleado',
    component :TipoempleadoComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR'] }
  },
  {
    path: 'tipoempleado/edit/:id',
    component :TipoempleadoEditComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR'] }
  },
  {
    path: 'tipovehiculos',
    component :TipovehiculosComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR'] }
  },
  {
    path: 'tipovehiculos/edit/:id',
    component :TipovehiculosEditComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR'] }
  },
  {
    path: 'paises',
    component :PaisesComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR'] }
  },
  {
    path: 'paises/edit/:id',
    component :PaisesEditComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR'] }
  },
  {
    path: 'brokers',
    component :BrokersComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR', 'ASISTENTE OPERATIVO'] }
  },
  {
    path: 'brokers/edit/:id',
    component :BrokersEditComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR', 'ASISTENTE OPERATIVO'] }
  },
  {
    path: 'warehouses',
    component :WarehousesComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR', 'ASISTENTE OPERATIVO'] }
  },
  {
    path: 'warehouses/edit/:id',
    component :WarehousesEditComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR', 'ASISTENTE OPERATIVO'] }
  },
  {
    path: 'transportistas',
    component :TransportistasComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR', 'ASISTENTE OPERATIVO'] }
  },
  {
    path: 'transportistas/edit/:id',
    component :TransportistasEditComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR', 'ASISTENTE OPERATIVO'] }
  },
  {
    path: 'empleados',
    component :EmpleadosComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR'] }
  },
  {
    path: 'empleados/edit/:id',
    component :EmpleadosEditComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR'] }
  },
  {
    path: 'usuarios',
    component :UsuariosComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR'] }
  },
  {
    path: 'usuarios/edit/:id',
    component :UsuariosEditComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR'] }
  },
  {
    path: 'choferes',
    component :ChoferesComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR', 'ASISTENTE OPERATIVO'] }
  },
  {
    path: 'choferes/edit/:id',
    component :ChoferesEditComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR', 'ASISTENTE OPERATIVO'] }
  },
  {
    path: 'cargas',
    component :CargasComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR','DESPACHADOR', 'ASISTENTE OPERATIVO'] }
  },
  {
    path: 'cargas/edit/:id',
    component :CargasEditComponent,
    canActivate: [AuthGuard],data: { roles: ['ADMINISTRADOR', 'SUPERVISOR','DESPACHADOR', 'ASISTENTE OPERATIVO'] }
  },
  
  // Ruta para manejar rutas no definidas
  {
    path: '**',
    redirectTo: '/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
