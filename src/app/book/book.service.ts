import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from './models/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  service = inject(HttpClient);

  getBooks(): Observable<IBook[]> {
    const url = 'http://localhost:4730/books';
    return this.service.get<IBook[]>(url);
  }

  getBook(isbn: string): Observable<IBook> {
    const url = 'http://localhost:4730/books/' + isbn;
    return this.service.get<IBook>(url);
  }
}
