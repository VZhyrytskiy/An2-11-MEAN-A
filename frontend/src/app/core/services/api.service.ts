import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  messages: Array<any>;

  private baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getMessages() {
    this.http.get(this.baseUrl).subscribe(res => {
      this.messages = <Array<any>>res;
    });
  }
}
