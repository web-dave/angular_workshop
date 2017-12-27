import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { IBook } from './custom-types';

@Injectable()
export class BooksService {
  restRoot = 'http://localhost:4730/books';

  constructor(private http: HttpClient) { }


  getBooks() {
    const url = this.restRoot;
    return this.http.get<IBook[]>(url);
  }

  getBook(isbn){
    const url = `${this.restRoot}/${isbn}`;
    return this.http.get<IBook>(url);
  }

}
