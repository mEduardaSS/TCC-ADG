import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroAnimalPage } from './cadastro-animal.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroAnimalPageRoutingModule {}
