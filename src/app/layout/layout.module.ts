import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BancoQuestoesModule } from '../pages/banco-questoes/banco-questoes.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    PageLoaderComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    BancoQuestoesModule,
    AppRoutingModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    PageLoaderComponent,
    MainLayoutComponent
  ]
})
export class LayoutModule { }
