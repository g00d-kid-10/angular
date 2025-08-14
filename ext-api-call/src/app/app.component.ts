import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'ext-api-call';
  items: any[] = [];
  constructor(private data: DataService) {}
  ngOnInit(): void {
    this.data.getData().subscribe((data) => {
      this.items = data;
    });
  }
}
