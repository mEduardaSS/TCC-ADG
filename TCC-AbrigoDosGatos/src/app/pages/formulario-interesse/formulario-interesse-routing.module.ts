import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioInteressePage } from './formulario-interesse.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioInteressePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioInteressePageRoutingModule {}
