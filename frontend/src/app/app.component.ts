import { Component, OnInit } from '@angular/core';

import { AppService, Cat } from './app.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  cats$: Observable<Cat[]>;

  constructor(
    private appService: AppService) { }

  ngOnInit() {
    this.cats$ = this.appService.getAllCats();
  }
}
