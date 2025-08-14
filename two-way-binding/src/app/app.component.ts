import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'test';
  fahrenheit: number;
  celsius: number;

  constructor() {
    this.celsius = 0;
    this.fahrenheit = 32;
  }

  reCalculateFahrenheit() {
    this.fahrenheit = Number(((this.celsius * 9) / 5 + 32).toFixed(1));
  }

  reCalculateCelsius() {
    this.celsius = Number((((this.fahrenheit - 32) * 5) / 9).toFixed(1));
  }
}
