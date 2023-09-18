import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnaliseVoluntarioPage } from './analise-voluntario.page';

const routes: Routes = [
  {
    path: '',
    component: AnaliseVoluntarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnaliseVoluntarioPageRoutingModule {}
