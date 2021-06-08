import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'lifeCycleHooks';

  nomeUsuario = 'Rodrigo Rodrigues';

  public changeUser() {
    this.nomeUsuario = 'Lívia Couto';
  }
}


