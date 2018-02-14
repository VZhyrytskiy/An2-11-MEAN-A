import { Component, OnInit } from '@angular/core';

import { ApiService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getMessages().subscribe(res => console.log(res));
  }
}
