import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpresasComponent} from './components/empresas/empresas.component';
import { EmpresasEditComponent} from './components/empresas-edit/empresas-edit.component';

const routes: Routes = [
  {
    path: 'empresas',
    component :EmpresasComponent
  },
  {
    path: 'empresas/edit/:id',
    component :EmpresasEditComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
