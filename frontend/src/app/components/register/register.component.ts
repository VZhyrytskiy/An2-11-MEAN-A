import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerData = {
    email: '',
    pwd: ''
  };

  constructor(private api: ApiService) {}

  ngOnInit() {}

  post() {
    this.api.sendUserRegistration(this.registerData);
  }
}
