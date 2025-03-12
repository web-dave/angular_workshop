import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IBook } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  service = inject(HttpClient);

  getBooks(): Observable<IBook[]> {
    return this.service.get<IBook[]>('api/');
  }
  getBook(isbn: string): Observable<IBook> {
    return this.service.get<IBook>('api/' + isbn);
  }
}
