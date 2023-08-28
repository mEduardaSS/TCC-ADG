import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoluntarioPage } from './voluntario.page';

const routes: Routes = [
  {
    path: '',
    component: VoluntarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoluntarioPageRoutingModule {}
