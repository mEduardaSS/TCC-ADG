import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatosAdotadosPage } from './gatos-adotados.page';

const routes: Routes = [
  {
    path: '',
    component: GatosAdotadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatosAdotadosPageRoutingModule {}
