import { Component, Input, ViewChild } from '@angular/core';
import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent {

  //nomePai = 'Rodrigo';

  //nomes = ['Lívia', 'Pedro', '', 'Bebelo'];

  /*
  paises = ['Brasil', 'Estados Unidos', 'Japão', 'Israel'];

  @Input() votado: string = "";

  onVoted(votado: string) {
    this.votado = votado;
  }*/

  @ViewChild(FilhoComponent, { static: false })

  private filhoComponent!: FilhoComponent;

  nome!: string;

  ngAfterViewInit() {
    setTimeout(() => this.nome = this.filhoComponent.nome, 0);
  }


}
