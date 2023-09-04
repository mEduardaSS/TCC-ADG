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
    loadChildren: () => import('./admin/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin/home',
    loadChildren: () => import('./admin/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin/ajuda',
    loadChildren: () => import('./admin/ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'admin/cadastro-animal',
    loadChildren: () => import('./admin/cadastro-animal/cadastro-animal.module').then( m => m.CadastroAnimalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
