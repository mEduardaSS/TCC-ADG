import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre.module').then( m => m.SobrePageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./pages/ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'voluntario',
    loadChildren: () => import('./pages/voluntario/voluntario.module').then( m => m.VoluntarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'formulario-interesse',
    loadChildren: () => import('./pages/formulario-interesse/formulario-interesse.module').then( m => m.FormularioInteressePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
 
  {
    path: 'admin/cadastro-animal',
    loadChildren: () => import('./admin/cadastro-animal/cadastro-animal.module').then( m => m.CadastroAnimalPageModule)
  },
  {
    path: 'admin/analise-voluntario',
    loadChildren: () => import('./admin/analise-voluntario/analise-voluntario.module').then( m => m.AnaliseVoluntarioPageModule)
  },
  {
    path: 'analise-adocao',
    loadChildren: () => import('./admin/analise-adocao/analise-adocao.module').then( m => m.AnaliseAdocaoPageModule)
  },
  {
    path: 'ajuda-admin',
    loadChildren: () => import('./admin/ajuda-admin/ajuda-admin.module').then( m => m.AjudaAdminPageModule)
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./admin/home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
  {
    path: 'controle-voluntarios',
    loadChildren: () => import('./admin/controle-voluntarios/controle-voluntarios.module').then( m => m.ControleVoluntariosPageModule)
  },
  {
    path: 'editar-voluntario',
    loadChildren: () => import('./admin/editar-voluntario/editar-voluntario.module').then( m => m.EditarVoluntarioPageModule)
  },
  {
    path: 'editar-gato',
    loadChildren: () => import('./admin/editar-gato/editar-gato.module').then( m => m.EditarGatoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
