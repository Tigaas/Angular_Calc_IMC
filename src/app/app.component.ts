import { Component } from '@angular/core';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  standalone: false,
})
export class AppComponent {
  title = 'Calc_IMC';

  peso: number = 0;
  altura: number = 0;
  imc: number | null = null; 
  mensagem: string = '';

  calcularIMC() {
    if (this.altura <= 0) {
      this.mensagem = "Erro: A altura deve ser maior que zero!";
      this.imc = null;
      return;
    }

    this.imc = parseFloat((this.peso / (this.altura * this.altura)).toFixed(2));
    this.definirMensagem();
  }

  definirMensagem() {
    if (this.imc !== null) {
      if (this.imc < 18.5) {
        this.mensagem = 'Abaixo do peso';
      } else if (this.imc >= 18.5 && this.imc < 24.9) {
        this.mensagem = 'Peso normal';
      } else if (this.imc >= 25 && this.imc < 29.9) {
        this.mensagem = 'Sobrepeso';
      } else {
        this.mensagem = 'Obesidade';
      }
    }
  }
}
