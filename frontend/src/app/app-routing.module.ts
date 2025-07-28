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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
