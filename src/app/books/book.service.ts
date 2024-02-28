import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IBook } from './book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private http = inject(HttpClient);

  getAll() {
    return this.http.get<IBook[]>('http://localhost:4730/books');
  }
}
