import { Component, OnInit } from "@angular/core";
import { BooksService } from "../shared/books.service";
import { IBook } from "../shared/custom-types";
import { Router } from "@angular/router/";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import * as BooksAction from "../store/books.actions";
import * as BooksReducer from "../store/books.reducer";
import { booksStoreName } from "../store/books.reducer";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit {
  // books: IBook[];
  books$;
  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<BooksReducer.BooksState>
  ) {}

  ngOnInit() {
    this.booksService.getBooks().subscribe(books => {
      // this.books = books
      this.store.dispatch(new BooksAction.LoadBooks(books));
    });

    this.books$ = this.store.select<IBook[]>(
      (state: BooksReducer.BooksState) => {
        return state[booksStoreName]['books'] ? state[booksStoreName]["books"]["books"] : [];
      }
    );
  }

  selectBook(book: IBook) {
    this.router.navigate([book.isbn], { relativeTo: this.route });
  }
}
