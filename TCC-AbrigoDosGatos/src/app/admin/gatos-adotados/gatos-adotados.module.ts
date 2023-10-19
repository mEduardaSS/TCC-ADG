import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GatosAdotadosPageRoutingModule } from './gatos-adotados-routing.module';

import { GatosAdotadosPage } from './gatos-adotados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatosAdotadosPageRoutingModule
  ],
  declarations: [GatosAdotadosPage]
})
export class GatosAdotadosPageModule {}
