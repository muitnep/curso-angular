import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CadastroReactiveformComponent } from './cadastro-reactiveform/cadastro-reactiveform.component';
//import { CadastroFormularioComponent } from './cadastro-formulario/cadastro-formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    //CadastroFormularioComponent,
    CadastroReactiveformComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
