import { Component, OnInit } from "@angular/core";
import { BooksService } from "../shared/books.service";
import { IBook } from "../shared/custom-types";
import { Router } from "@angular/router/";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { BooksState, booksStoreName } from "../store/books.reducer";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit {
  books$: Observable<IBook[]>;

  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<BooksState>
  ) { }

  ngOnInit() {
    this.booksService.getBooks()

    this.books$ = this.store.select<IBook[]>(
      (state: BooksState) => {
        return state[booksStoreName]['books'] ? state[booksStoreName]["books"]["books"] : [];
      }
    );
  }

  selectBook(book: IBook) {
    this.router.navigate([book.isbn], { relativeTo: this.route });
  }
}
