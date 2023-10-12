import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarGatoPageRoutingModule } from './editar-gato-routing.module';

import { EditarGatoPage } from './editar-gato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarGatoPageRoutingModule
  ],
  declarations: [EditarGatoPage]
})
export class EditarGatoPageModule {}
