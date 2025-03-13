import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IBook } from '../book';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookService } from '../book.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { PagesPipe } from '../pages.pipe';
import { Observable } from 'rxjs';
import { OrderBtnDirective } from './order-btn.directive';

@Component({
  selector: 'app-book-details',
  imports: [PagesPipe, AsyncPipe, OrderBtnDirective, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit {
  _book?: IBook;
  book$!: Observable<IBook>;
  route = inject(ActivatedRoute);
  service = inject(BookService);
  dRef = inject(DestroyRef);
  ngOnInit(): void {
    const isbn = this.route.snapshot.params['isbn'];
    this.book$ = this.service.getBook(isbn);
    this.service
      .getBook(isbn)
      .pipe(takeUntilDestroyed(this.dRef))
      .subscribe((data) => {
        console.log('==>', data);
        this._book = data;
      });

    // setInterval(() => {
    //   if (this.book) {
    //     this.book.numPages = 300;
    //   }
    // }, 1500);
  }
  // transform(value: number, label = 'Pages'): string {
  //   console.log('method', value);
  //   return `${label}: ${value}`;
  // }
}
