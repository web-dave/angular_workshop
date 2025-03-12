import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  service = inject(HttpClient);

  getBooks() {
    return this.service.get('http://localhost:4730/books');
  }
}
