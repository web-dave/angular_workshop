import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBook } from '../book';
import { BookService } from '../book.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-book-edit',
  imports: [FormsModule, JsonPipe],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss',
})
export class BookEditComponent {
  book?: IBook;
  route = inject(ActivatedRoute);
  service = inject(BookService);
  router = inject(Router);
  dRef = inject(DestroyRef);

  ngOnInit(): void {
    const isbn = this.route.snapshot.params['isbn'];

    this.service
      .getBook(isbn)
      .pipe(takeUntilDestroyed(this.dRef))
      .subscribe((data) => {
        console.log('==>', data);
        this.book = data;
      });
  }

  saveBook() {
    this.service
      .updateBook(this.book as IBook)
      .subscribe(() =>
        this.router.navigate(['..'], { relativeTo: this.route })
      );
  }
}
