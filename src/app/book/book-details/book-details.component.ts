import { Component, Input, OnInit, inject } from '@angular/core';
import { IBook } from '../models/book.interface';
import { BookService } from '../book.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { NEVER, Observable } from 'rxjs';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit {
  @Input() isbn: string = '';
  book: IBook | undefined;

  book$: Observable<IBook> = NEVER;

  service = inject(BookService);

  ngOnInit(): void {
    this.book$ = this.service.getBook(this.isbn);
    // this.service.getBook(this.isbn).subscribe((data) => (this.book = data));
  }
  // sub = inject(ActivatedRoute).params.subscribe((params: Params) => {
  //   this.service
  //     .getBook(params['isbn'])
  //     .subscribe((data) => (this.book = data));
  // });
}
