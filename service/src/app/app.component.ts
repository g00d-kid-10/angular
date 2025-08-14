import { Component } from '@angular/core';
import { MathService } from './math.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'service tut';
  x: string;
  y: string;
  addValue: number;
  minusValue: number;

  constructor(private math: MathService) {
    this.x = '';
    this.y = '';
    this.addValue = 0;
    this.minusValue = 0;
  }

  add() {
    // Convert the input values to numbers
    const xValue = parseFloat(this.x);
    const yValue = parseFloat(this.y);

    // Check if the conversion is successful before performing the addition
    if (!isNaN(xValue) && !isNaN(yValue)) {
      this.addValue = this.math.add(xValue, yValue);
      this.minusValue = this.math.minus(xValue, yValue);
    } else {
      // Handle invalid input (non-numeric values)
      this.addValue = NaN;
    }
  }
}
