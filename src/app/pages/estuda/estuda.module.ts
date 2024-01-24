import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudaRoutingModule } from './estuda-routing.module';
import { EstudaComponent } from './estuda/estuda.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MainLayoutComponent } from 'src/app/layout/main-layout/main-layout.component';
import { SidebarComponent } from 'src/app/layout/sidebar/sidebar.component';
import { BancoQuestoesModule } from '../banco-questoes/banco-questoes.module';

@NgModule({
  declarations: [
    EstudaComponent
  ],
  imports: [
    CommonModule,
    EstudaRoutingModule,
    MatSidenavModule,
    LayoutModule
  ],
  exports: [
    EstudaComponent
  ]
})
export class EstudaModule { }
