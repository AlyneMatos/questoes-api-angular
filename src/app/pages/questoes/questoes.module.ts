import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestoesRoutingModule } from './questoes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from 'src/app/layout/sidebar/sidebar.component';
import { QuestoesComponent } from './questoes/questoes.component';


@NgModule({
  declarations: [
    QuestoesComponent
  ],
  imports: [
    CommonModule,
    QuestoesRoutingModule,
    SharedModule
  ]
})
export class QuestoesModule { }
