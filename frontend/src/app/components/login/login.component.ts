import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    email: '',
    pwd: ''
  };

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  post() {
    this.auth.loginUser(this.loginData);
  }
}
