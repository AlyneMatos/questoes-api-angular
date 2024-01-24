import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancoQuestoesRoutingModule } from './banco-questoes-routing.module';
import { BancoQuestoesComponent } from './banco-questoes/banco-questoes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BancoQuestoesComponent
  ],
  imports: [
    CommonModule,
    BancoQuestoesRoutingModule,
    SharedModule
  ],
  exports:[
    BancoQuestoesComponent
  ]
})
export class BancoQuestoesModule { }
