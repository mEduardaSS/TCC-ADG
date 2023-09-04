import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AjudaPage } from 'src/app/pages/ajuda/ajuda.page';
import { CadastroAnimalPage } from '../cadastro-animal/cadastro-animal.page';

const routes: Routes = [
  { path: '', component: HomePage   },
  { path: 'ajuda', component: AjudaPage},
  { path: 'cadastro-animal', component: CadastroAnimalPage},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
