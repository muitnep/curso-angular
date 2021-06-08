import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-formulario',
  templateUrl: './cadastro-formulario.component.html',
  styleUrls: ['./cadastro-formulario.component.css']
})
export class CadastroFormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  onSubmit(form: NgForm) {
    let dados = `
      Nome: ${form.value.nome}
      Telefone: ${form.value.telefone}
      Endereco: ${form.value.endereco};`

    console.log(dados);


  }

}
