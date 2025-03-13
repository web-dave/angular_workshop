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
    return this.service.get<IBook[]>('api/').pipe();
  }
  getBook(isbn: string): Observable<IBook> {
    return this.service.get<IBook>('api/' + isbn);
  }
  updateBook(book: IBook) {
    return this.service.put<IBook>('api/' + book.isbn, book);
  }
  createBook(book: IBook) {
    return this.service.post<IBook>('api/', book);
  }
}
