import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { IBook } from './custom-types';
import { Store } from '@ngrx/store';
import { BooksState } from '../store/books.reducer';
import { LoadBooks } from '../store/books.actions';

@Injectable()
export class BooksService {
  restRoot = 'http://localhost:4730/books';

  constructor(private http: HttpClient, private store: Store<BooksState>) { }



  getBooks() {
    const url = this.restRoot;
    this.http.get<IBook[]>(url).subscribe(books => {
      this.store.dispatch(new LoadBooks(books));
    });
  }

  getBook(isbn) {
    const url = `${this.restRoot}/${isbn}`;
    return this.http.get<IBook>(url);
  }

  updateBook(book) {
    const url = `${this.restRoot}/${book.isbn}`;
    return this.http.put<IBook>(url, book);
  }

}
