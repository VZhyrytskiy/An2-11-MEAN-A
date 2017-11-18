import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

export interface Cat {
  name: string;
}

@Injectable()
export class AppService {
  baseUrl = 'http://localhost:3000/api/cats/';
  constructor(private http: HttpClient) { }

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.baseUrl);
  }

  getCat(name: string): Observable<Cat> {
    return this.http.get<Cat>(`${this.baseUrl}${name}`);
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.baseUrl, cat);
  }

  updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}${cat.name}`, cat);
  }

  deleteCat(name: string) {
    return this.http.delete(`${this.baseUrl}${name}`);
  }
}
