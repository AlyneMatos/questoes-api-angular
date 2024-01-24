import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudaModule } from './pages/estuda/estuda.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { BancoQuestoesModule } from './pages/banco-questoes/banco-questoes.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    EstudaModule,
    SharedModule,
    LayoutModule,
    BancoQuestoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
