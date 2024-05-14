import { Component, inject } from '@angular/core';
import { BookService } from '../book.service';
import { BookPreviewComponent } from '../book-preview/book-preview.component';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookPreviewComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  books: any;
  bar = 0;
  foo = inject(BookService)
    .getBooks()
    .subscribe((data) => (this.books = data));

  // service = inject(BookService);
  // ngOnInit(): void {
  //   this.service.getBooks().subscribe((data) => (this.books = data));
  // }

  pong(data: any) {
    console.table(data);
  }
}
