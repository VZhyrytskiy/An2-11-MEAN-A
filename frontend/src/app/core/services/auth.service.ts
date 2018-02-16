import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  registerUser(registerData) {
    this.http
      .post(`${this.baseUrl}register`, registerData)
      .subscribe(res => {});
  }

  loginUser(loginData) {
    this.http
      .post(`${this.baseUrl}login`, loginData)
      .subscribe((res: {token: string}) => {
        console.log(res);
        localStorage.setItem('token', res.token);
      });
  }
}
