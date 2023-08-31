import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoluntarioPage } from './voluntario.page';
import { AjudaPage } from '../ajuda/ajuda.page';
import { LoginPage } from '../login/login.page';
import { SobrePage } from '../sobre/sobre.page';




const routes: Routes = [
  {
    path: '',
    component: VoluntarioPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoluntarioPageRoutingModule {}
