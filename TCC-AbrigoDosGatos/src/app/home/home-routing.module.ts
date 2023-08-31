import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SobrePage } from '../pages/sobre/sobre.page';
import { AjudaPage } from '../pages/ajuda/ajuda.page';
import { VoluntarioPage } from '../pages/voluntario/voluntario.page';
import { LoginPage } from '../pages/login/login.page';
import { FormularioInteressePage } from '../pages/formulario-interesse/formulario-interesse.page';


const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'sobre', component: SobrePage },
  { path: 'ajuda', component: AjudaPage },
  { path: 'voluntario', component: VoluntarioPage },
  { path: 'login', component: LoginPage },
  { path: 'formulario-interesse', component: FormularioInteressePage },
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
