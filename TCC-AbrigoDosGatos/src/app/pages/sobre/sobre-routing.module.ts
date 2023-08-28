import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobrePage } from './sobre.page';
import { AjudaPage } from '../ajuda/ajuda.page';
import { VoluntarioPage } from '../voluntario/voluntario.page';
import { LoginPage } from '../login/login.page';

const routes: Routes = [
  { path: '', component: SobrePage },
  { path: 'ajuda', component: AjudaPage },
  { path: 'voluntario', component: VoluntarioPage },
  { path: 'login', component: LoginPage },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobrePageRoutingModule {}
