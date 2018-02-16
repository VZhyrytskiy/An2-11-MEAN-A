import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  messages: Array<any>;
  users: Array<any>;

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getMessages() {
    this.http.get(`${this.baseUrl}posts`).subscribe(res => {
      this.messages = <Array<any>>res;
    });
  }

  getUsers() {
    this.http.get(`${this.baseUrl}users`).subscribe(res => {
      this.users = <Array<any>>res;
    });
  }
}
