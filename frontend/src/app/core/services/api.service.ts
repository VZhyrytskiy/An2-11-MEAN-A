import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  messages: Array<any>;
  users: Array<any>;

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getMessages(userId: string) {
    this.http.get(`${this.baseUrl}posts/${userId}`).subscribe(res => {
      this.messages = <Array<any>>res;
    });
  }

  postMessage(message: { msg: string }) {
    this.http.post(`${this.baseUrl}post`, message).subscribe(res => {});
  }

  getUsers() {
    this.http.get(`${this.baseUrl}users`).subscribe(res => {
      this.users = <Array<any>>res;
    });
  }

  getProfile(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}profile/${id}`);
  }
}
