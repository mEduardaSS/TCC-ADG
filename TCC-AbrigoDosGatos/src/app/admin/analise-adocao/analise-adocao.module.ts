import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnaliseAdocaoPageRoutingModule } from './analise-adocao-routing.module';

import { AnaliseAdocaoPage } from './analise-adocao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnaliseAdocaoPageRoutingModule
  ],
  declarations: [AnaliseAdocaoPage]
})
export class AnaliseAdocaoPageModule {}
