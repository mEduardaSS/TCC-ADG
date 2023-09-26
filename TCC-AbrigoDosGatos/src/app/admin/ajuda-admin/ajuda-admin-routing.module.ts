import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjudaAdminPage } from './ajuda-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AjudaAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjudaAdminPageRoutingModule {}
