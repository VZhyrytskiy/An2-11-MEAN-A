import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private baseUrl = 'http://localhost:3000/auth/';
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  get token() {
    return localStorage.getItem(this.tokenKey);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.tokenKey);
  }

  registerUser(registerData) {
    this.http
      .post<any>(`${this.baseUrl}register`, registerData)
      .subscribe(res => {
        this.saveToken(res.token);
      });
  }

  loginUser(loginData) {
    this.http
      .post(`${this.baseUrl}login`, loginData)
      .subscribe((res: { token: string }) => {
        this.saveToken(res.token);
      });
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  private saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }
}
