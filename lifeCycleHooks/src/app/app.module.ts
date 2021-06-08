import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { DestroyComponent } from './destroy/destroy.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    ComponenteFilhoComponent,
    DestroyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
