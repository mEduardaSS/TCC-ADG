import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjudaPage } from './ajuda.page';
import { SobrePage } from '../sobre/sobre.page';
import { VoluntarioPage } from '../voluntario/voluntario.page';
import { LoginPage } from '../login/login.page';


  const routes: Routes = [
    { path: '', component: AjudaPage },
   
     
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjudaPageRoutingModule {}
