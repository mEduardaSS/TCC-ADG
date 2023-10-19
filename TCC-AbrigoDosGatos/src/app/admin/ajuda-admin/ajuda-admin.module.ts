import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjudaAdminPageRoutingModule } from './ajuda-admin-routing.module';

import { AjudaAdminPage } from './ajuda-admin.page';
// import { MenuAdmComponent } from '../menu-adm/menu-adm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjudaAdminPageRoutingModule
  ],
  declarations: [AjudaAdminPage]
})
export class AjudaAdminPageModule {}
