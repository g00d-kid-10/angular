import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive-form';
  myForm: FormGroup;
  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
    });
  }
  onSubmit() {
    console.log('Form Submitted:', this.myForm.value);
  }
}
