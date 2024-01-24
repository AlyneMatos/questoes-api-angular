import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudaComponent } from './estuda/estuda.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudaRoutingModule { }
