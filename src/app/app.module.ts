import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MostraCursosComponent } from './mostra-cursos/mostra-cursos.component';
import { TabelaCursosComponent } from './tabela-cursos/tabela-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    MostraCursosComponent,
    TabelaCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
