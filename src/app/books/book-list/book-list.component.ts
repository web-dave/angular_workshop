import { Component, OnInit, inject } from '@angular/core';
import { BookService } from '../book.service';
import { BookPreviewComponent } from '../book-preview/book-preview.component';
import { IBook } from '../book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [BookPreviewComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  service = inject(BookService);
  books: IBook[] = [];
  getAllBooks() {
    this.service.getAll().subscribe((data) => (this.books = data));
  }

  selectBook(e: any) {
    console.log(e);
  }

  ngOnInit(): void {
    this.getAllBooks();
  }
}
