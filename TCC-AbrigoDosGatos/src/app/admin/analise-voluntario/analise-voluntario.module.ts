import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnaliseVoluntarioPageRoutingModule } from './analise-voluntario-routing.module';

import { AnaliseVoluntarioPage } from './analise-voluntario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnaliseVoluntarioPageRoutingModule
  ],
  declarations: [AnaliseVoluntarioPage]
})
export class AnaliseVoluntarioPageModule {}
