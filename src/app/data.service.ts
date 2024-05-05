import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return of([]);
  }

  constructor() { }
}
