import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit() {
    this.api.getUsers();
  }

}
