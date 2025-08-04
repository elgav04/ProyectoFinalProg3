import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

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
  // Ruta para manejar rutas no definidas
  {
    path: '**',
    redirectTo: '/login'
  },


  {
    path: 'empresas',
    component :EmpresasComponent,
    canActivate:  [RoleGuard] ,data: { roles: [1,2,4]  }
  },
  {
    path: 'empresas/edit/:id',
    component :EmpresasEditComponent,

  },
  {
    path: 'tipousuarios',
    component :TipousuariosComponent,
    canActivate:  [RoleGuard] ,data: { roles: [1]  }
  },
  {
    path: 'tipousuarios/edit/:id',
    component :TipousuariosEditComponent,

  },
  {
    path: 'tipoempleado',
    component :TipoempleadoComponent,
    canActivate:  [RoleGuard] ,data: { roles: [1]  }
  },
  {
    path: 'tipoempleado/edit/:id',
    component :TipoempleadoEditComponent,

  },
  {
    path: 'tipovehiculos',
    component :TipovehiculosComponent,
    canActivate:  [RoleGuard] ,data: { roles: [1,2]  }
  },
  {
    path: 'tipovehiculos/edit/:id',
    component :TipovehiculosEditComponent,

  },
  {
    path: 'paises',
    component :PaisesComponent,
    canActivate:  [RoleGuard] ,data: { roles: [1,2]  }
  },
  {
    path: 'paises/edit/:id',
    component :PaisesEditComponent,

  },
  {
    path: 'brokers',
    component :BrokersComponent,
    canActivate:  [RoleGuard] ,data: { roles: [1,2,4]  }
  },
  {
    path: 'brokers/edit/:id',
    component :BrokersEditComponent,

  },
  {
    path: 'warehouses',
    component :WarehousesComponent,
    canActivate:  [RoleGuard] ,data: { roles: [1,2,4]  }
  },
  {
    path: 'warehouses/edit/:id',
    component :WarehousesEditComponent,

  },
  {
    path: 'transportistas',
    component :TransportistasComponent,
    canActivate:  [RoleGuard] ,data: { roles: [1,2,4]  }
  },
  {
    path: 'transportistas/edit/:id',
    component :TransportistasEditComponent,

  },
  {
    path: 'empleados',
    component :EmpleadosComponent,
    canActivate:  [RoleGuard] ,data: { roles: [1,2]  }
  },
  {
    path: 'empleados/edit/:id',
    component :EmpleadosEditComponent,

  },
  {
    path: 'usuarios',
    component :UsuariosComponent,
    canActivate:  [RoleGuard] ,data: { roles: [1]  }
  },
  {
    path: 'usuarios/edit/:id',
    component :UsuariosEditComponent,
    
  },
  {
    path: 'choferes',
    component :ChoferesComponent,
    canActivate:  [RoleGuard] ,data: { roles: [1,2,4]  }
  },
  {
    path: 'choferes/edit/:id',
    component :ChoferesEditComponent,

  },
  {
    path: 'cargas',
    component :CargasComponent,
    canActivate:  [RoleGuard] ,data: { roles: [1,2,3,4]  }
  },
  {
    path: 'cargas/edit/:id',
    component :CargasEditComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
