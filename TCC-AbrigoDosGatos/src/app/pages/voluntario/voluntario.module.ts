import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoluntarioPageRoutingModule } from './voluntario-routing.module';

import { VoluntarioPage } from './voluntario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoluntarioPageRoutingModule
  ],
  declarations: [VoluntarioPage]
})
export class VoluntarioPageModule {}
