import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControleVoluntariosPageRoutingModule } from './controle-voluntarios-routing.module';

import { ControleVoluntariosPage } from './controle-voluntarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControleVoluntariosPageRoutingModule
  ],
  declarations: [ControleVoluntariosPage]
})
export class ControleVoluntariosPageModule {}
