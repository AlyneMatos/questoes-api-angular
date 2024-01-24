import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoQuestoesComponent } from './banco-questoes/banco-questoes.component';

const routes: Routes = [
  {path:'', component: BancoQuestoesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BancoQuestoesRoutingModule { }
