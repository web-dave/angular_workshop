import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IBook } from '../models/book.interface';
import { BookService } from '../book.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  @Input() isbn: string = '';
  book: IBook | undefined;

  service = inject(BookService);

  ngOnInit(): void {
    this.service.getBook(this.isbn).subscribe((data) => (this.book = data));
  }
  // sub = inject(ActivatedRoute).params.subscribe((params: Params) => {
  //   this.service
  //     .getBook(params['isbn'])
  //     .subscribe((data) => (this.book = data));
  // });
}
