import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpresasComponent} from './components/empresas/empresas.component';

const routes: Routes = [
  {
    path: 'empresas',
    component :EmpresasComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
