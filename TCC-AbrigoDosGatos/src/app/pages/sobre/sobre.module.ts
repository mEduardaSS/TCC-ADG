import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';
import { SobrePipe } from '../sobre.pipe';


@NgModule({
  declarations: [
    SobrePipe
  ],
  imports: [
    CommonModule,
    SobreRoutingModule
  ]
})
export class SobreModule { }
