import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { url } from '../../../env/env.dev';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = url;
  service = inject(HttpClient);

  getBooks() {
    return this.service.get<any>('http://localhost:4730/books');
  }
}
