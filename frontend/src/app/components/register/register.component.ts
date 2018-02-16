import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core';

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

  constructor(private auth: AuthService) {}

  ngOnInit() {}

  post() {
    this.auth.registerUser(this.registerData);
  }
}
