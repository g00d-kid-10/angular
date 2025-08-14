import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass'],
})

export class ChildComponent {
  data: string;
  @Output() childClickEvent = new EventEmitter<string>();

  constructor() {
    this.data = 'this the valuable key';
  }

  handleChildClick() {
    this.childClickEvent.emit(this.data);
  }
}
