import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookPreviewComponent } from '../book-preview/book-preview.component';
import { IBook } from '../book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [BookPreviewComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  service = inject(BookService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  getBooks() {
    this.service.getBooks().subscribe((data) => (this.books = data));
  }

  ngOnInit(): void {
    this.getBooks();
  }

  goTo(book: IBook) {
    console.table(book);
    this.router.navigate([book.isbn], {
      relativeTo: this.route,
    });
  }
}
