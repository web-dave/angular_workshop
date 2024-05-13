import { Component, inject } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  books: any;
  foo = inject(BookService)
    .getBooks()
    .subscribe((data) => (this.books = data));

  // service = inject(BookService);
  // ngOnInit(): void {
  //   this.service.getBooks().subscribe((data) => (this.books = data));
  // }
}
