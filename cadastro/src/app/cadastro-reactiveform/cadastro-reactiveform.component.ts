import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-reactiveform',
  templateUrl: './cadastro-reactiveform.component.html',
  styleUrls: ['./cadastro-reactiveform.component.css']
})

export class CadastroReactiveformComponent implements OnInit {

  formularioCadastro: FormGroup;

  constructor() {
    this.formularioCadastro = new FormGroup({
      'nome': new FormControl(null, Validators.required),
      'telefone': new FormControl(null, Validators.required),
      'endereco': new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    let dados = `
      Nome: ${this.formularioCadastro.value.nome}
      Telefone: ${this.formularioCadastro.value.telefone}
      Endereco: ${this.formularioCadastro.value.endereco}`;

    console.log(dados);
  }

}
