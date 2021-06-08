import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly apiURL: string;

  constructor(private http: HttpClient) {

    this.apiURL = 'http://localhost:3000';
  }

  listarTodosProdutos() {
    this.http.get<Produto[]>(`${this.apiURL}/produtos`)
      .subscribe(
        resultado => {
          console.log(resultado)
        });
  }

  listarProdutoPorId() {
    this.http.get<Produto[]>(`${this.apiURL}/produtos/1`)
      .subscribe(resultado => {
        console.log(resultado)
      },

        erro => {
          if (erro.status == 404) {
            console.log('produto não encontrado.')
          }
        }

      );
  }

  adicionarProduto() {

    let produto = new Produto();

    this.http.post<Produto>(`${this.apiURL}/produtos`, produto)
      .subscribe(
        resultado => {
          console.log(resultado);
        },
        erro => {
          if (erro.status == 400) {
            console.log(erro.error.mensagem);
          }
        }
      );
  }

  alterarProduto() {

    let produto = { id: 1, nome: 'Smart TV 50 polegadas' };

    this.http.put(`${this.apiURL}/produtos/1`, produto)
      .subscribe(
        resultado => {
          console.log('Produto alterado com sucesso.')
        },
        erro => {
          switch (erro.status) {
            case 400:
              console.log(erro.error.messagem);
              break;

            case 404:
              console.log('produto não localizado.');
              break;

            default:
              break;
          }
        }

      );

  }

  excluiProduto() {
    this.http.delete(`${this.apiURL}/produto/1`)
      .subscribe(
        resultado => {
          console.log('Produto excluído com sucesso.');
        },
        erro => {
          if (erro.status == 404) {
            console.log('Produto não localizado.')
          }
        }
      );
  }

}
