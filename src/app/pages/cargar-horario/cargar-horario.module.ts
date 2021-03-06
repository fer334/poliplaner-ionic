import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargarHorarioPageRoutingModule } from './cargar-horario-routing.module';

import { CargarHorarioPage } from './cargar-horario.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';
import { ArmarHorarioModule } from 'src/app/componentes/armar-horario/armar-horario.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargarHorarioPageRoutingModule,
    ComponentesModule,
    ArmarHorarioModule,
  ],
  declarations: [CargarHorarioPage]
})
export class CargarHorarioPageModule {}
