import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  service = inject(HttpClient);

  getBooks(): Observable<any> {
    const url = 'http://localhost:4730/books';
    return this.service.get<any>(url);
  }
}
