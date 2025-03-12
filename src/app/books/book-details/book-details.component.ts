import { Component, inject, OnInit } from '@angular/core';
import { IBook } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit {
  book?: IBook;
  route = inject(ActivatedRoute);
  service = inject(BookService);
  ngOnInit(): void {
    const isbn = this.route.snapshot.params['isbn'];
    this.service.getBook(isbn).subscribe((data) => (this.book = data));
  }
}
