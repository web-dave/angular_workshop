import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  http = inject(HttpClient);

  getAll() {
    return this.http.get<any>('http://localhost:4730/books');
  }
}
