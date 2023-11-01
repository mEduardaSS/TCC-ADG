import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnaliseControleVoluntariosPageRoutingModule } from './analise-controle-voluntarios-routing.module';

import { AnaliseControleVoluntariosPage } from './analise-controle-voluntarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnaliseControleVoluntariosPageRoutingModule
  ],
  declarations: [AnaliseControleVoluntariosPage]
})
export class AnaliseControleVoluntariosPageModule {}
