import { Component, inject, Injector, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BookPreviewComponent } from '../book-preview/book-preview.component';
import { IBook } from '../book';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-list',
  imports: [BookPreviewComponent, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent implements OnInit {
  service = inject(BookService);

  books = toSignal(this.service.getBooks(), {
    initialValue: [],
  });

  route = inject(ActivatedRoute);
  router = inject(Router);
  injector = inject(Injector);

  goTo(book: IBook) {
    console.table(book);
    this.router.navigate([book.isbn], {
      relativeTo: this.route,
    });
  }
  ngOnInit(): void {
    const foo = toSignal(this.service.getBooks(), {
      initialValue: [],
      injector: this.injector,
    });
  }
}
