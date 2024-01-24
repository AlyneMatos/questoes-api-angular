import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoQuestoesComponent } from '../pages/banco-questoes/banco-questoes/banco-questoes.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BancoQuestoesModule } from '../pages/banco-questoes/banco-questoes.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'', component: MainLayoutComponent },
  {path:'', component: SidebarComponent },
  {path:'', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
