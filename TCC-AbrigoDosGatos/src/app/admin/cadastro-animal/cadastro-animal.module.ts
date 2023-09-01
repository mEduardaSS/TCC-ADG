import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroAnimalPageRoutingModule } from './cadastro-animal-routing.module';

import { CadastroAnimalPage } from './cadastro-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroAnimalPageRoutingModule
  ],
  declarations: [CadastroAnimalPage]
})
export class CadastroAnimalPageModule {}
