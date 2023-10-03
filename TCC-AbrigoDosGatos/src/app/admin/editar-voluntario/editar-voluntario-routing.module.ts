import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarVoluntarioPage } from './editar-voluntario.page';

const routes: Routes = [
  {
    path: '',
    component: EditarVoluntarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarVoluntarioPageRoutingModule {}
