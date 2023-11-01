import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnaliseControleVoluntariosPage } from './analise-controle-voluntarios.page';

const routes: Routes = [
  {
    path: '',
    component: AnaliseControleVoluntariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnaliseControleVoluntariosPageRoutingModule {}
