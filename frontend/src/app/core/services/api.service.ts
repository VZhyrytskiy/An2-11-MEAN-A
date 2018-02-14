import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  private baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getMessages() {
    return this.http.get(this.baseUrl);
  }
}
