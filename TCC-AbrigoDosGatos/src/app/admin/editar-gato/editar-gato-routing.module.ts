import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarGatoPage } from './editar-gato.page';

const routes: Routes = [
  {
    path: '',
    component: EditarGatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarGatoPageRoutingModule {}
