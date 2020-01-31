import { Component } from '@angular/core';
import { Conta } from './conta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularsoftsweetudemy';

  contas = [];

  obtemContas() {
    this.contas = [
      new Conta (1, 'luz', 80.00),
      new Conta (2, 'internet', 80.00),
      new Conta (3, 'financiamento', 800.00),
      new Conta (4, 'compras', 500.00),
      new Conta (5, 'condominio', 120.00)

    ];
  }

  trackById(index: number, conta: Conta):number {
    return conta.id;
  }
}
