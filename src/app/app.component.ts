import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-test-jest';


  message() {
    alert('Teste feito com sucesso.')
  }

  calcNumber(num1: number, num2: number) {
    return num1 + num2;
  }
}
