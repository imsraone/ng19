import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class RestapiService {
  constructor(private http: HttpClient) {

  }

  getDatas() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getDataById( id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}   