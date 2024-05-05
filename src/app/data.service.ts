import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: HttpClient) {

  }

  getDataFromServer() {
    return this.http.get('https://dummyjson.com/products');
  }
}
