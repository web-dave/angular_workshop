import { Component, inject } from '@angular/core';
import { BookService } from '../book.service';
import { BookPreviewComponent } from '../book-preview/book-preview.component';
import { IBook } from '../models/book.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookPreviewComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  books: IBook[] = [];
  bar = 0;

  router = inject(Router);
  route = inject(ActivatedRoute);

  foo = inject(BookService)
    .getBooks()
    .subscribe((data) => (this.books = data));

  // service = inject(BookService);
  // ngOnInit(): void {
  //   this.service.getBooks().subscribe((data) => (this.books = data));
  // }

  pong(data: IBook) {
    this.router.navigate([data.isbn], { relativeTo: this.route });
  }
}
