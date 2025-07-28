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
    FiltertipoempleadoPipe
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
