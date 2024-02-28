import { Component, OnInit, inject } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  service = inject(BookService);
  books: any[] = [];
  getAllBooks() {
    this.service.getAll().subscribe((data) => (this.books = data));
  }

  ngOnInit(): void {
    this.getAllBooks();
  }
}
