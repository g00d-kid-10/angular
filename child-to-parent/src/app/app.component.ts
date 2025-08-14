import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'child-to-parent';
  data: string;
  constructor() {
    this.data = '';
  }

  getData(childData: string) {
    this.data = childData;
  }
}
