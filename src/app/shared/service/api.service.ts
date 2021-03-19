import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getJsonFromDummyApi(){

   return this.http.get('https://jsonplaceholder.typicode.com/albums');

  }
}
