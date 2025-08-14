import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyLoadComp';
  constructor(private conRef:ViewContainerRef) {

  }
    async firstLoader() {
      this.conRef.clear()
      const {FirstComponent} = await import('./first/first.component')
      this.conRef.createComponent(FirstComponent)
    }

    async secondLoader() {
      this.conRef.clear()
      const {SecondComponent} = await import('./second/second.component')
      this.conRef.createComponent(SecondComponent)
    }
}
