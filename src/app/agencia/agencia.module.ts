import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaAgenciaComponent } from './lista-agencia/lista-agencia.component';
import { ActualizarAgenciaComponent } from './actualizar-agencia/actualizar-agencia.component';
import { AgenciaComponent } from './agencia.component';
import { CoreModule } from '../core/core.module';
// import { AgenciaRoutingModule } from './agencia-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListaAgenciaComponent, ActualizarAgenciaComponent, AgenciaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //AgenciaRoutingModule,
    CoreModule
  ],
  exports: [
    AgenciaComponent, ListaAgenciaComponent, ActualizarAgenciaComponent
  ]
})
export class AgenciaModule { }
