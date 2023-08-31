import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioInteressePageRoutingModule } from './formulario-interesse-routing.module';

import { FormularioInteressePage } from './formulario-interesse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioInteressePageRoutingModule
  ],
  declarations: [FormularioInteressePage]
})
export class FormularioInteressePageModule {}
