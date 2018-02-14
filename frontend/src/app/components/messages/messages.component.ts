import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public api: ApiService) {}

  ngOnInit() {
    this.api.getMessages();
  }

}
