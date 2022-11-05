import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-test-jest';
  messageSend: string = '';

  message() {
    this.messageSend = 'Teste chamada de metodo feito com sucesso.';
  }

  calcNumber(num1: number, num2: number) {
    return num1 + num2;
  }
}
