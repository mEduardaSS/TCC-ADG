import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarVoluntarioPageRoutingModule } from './editar-voluntario-routing.module';

import { EditarVoluntarioPage } from './editar-voluntario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarVoluntarioPageRoutingModule
  ],
  declarations: [EditarVoluntarioPage]
})
export class EditarVoluntarioPageModule {}
