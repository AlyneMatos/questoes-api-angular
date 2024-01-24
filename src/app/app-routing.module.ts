import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    // canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'questoes', loadChildren: () => import("./pages/banco-questoes/banco-questoes.module")
                                            .then((router) => router.BancoQuestoesModule) }
    ]
  },
  // {
  //   path: 'signin',
  //   component: SigninComponent,
  //   loadChildren: () =>
  //     import('./authentication/authentication.module').then((router) => router.LoginModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
