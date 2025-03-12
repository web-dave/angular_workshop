import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookPreviewComponent } from '../book-preview/book-preview.component';

@Component({
  selector: 'app-book-list',
  imports: [BookPreviewComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  books: any[] = [];
  service = inject(BookService);

  getBooks() {
    this.service.getBooks().subscribe((data) => (this.books = data));
  }

  ngOnInit(): void {
    this.getBooks();
  }

  goTo(book: any) {
    console.table(book);
  }
}
