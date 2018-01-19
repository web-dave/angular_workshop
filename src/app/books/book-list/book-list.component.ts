import { Component, OnInit } from "@angular/core";
import { BooksService } from "../shared/books.service";
import { IBook } from "../shared/custom-types";
import { Router } from "@angular/router/";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { booksStoreName, BooksState } from "../store/books.reducer";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit {
  books: IBook[];
  books$;
  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<BooksState>
  ) { }

  ngOnInit() {
    this.booksService.getBooks()

    // this.books$ = 
    this.store.select<IBook[]>(
      (state: BooksState) => {
        let ret = []
        if (state[booksStoreName]['books']) {
          ret = state[booksStoreName]["books"]["books"]
        }
        return ret

        // return state[booksStoreName]['books'] ? state[booksStoreName]["books"]["books"] : [];
      }
    ).subscribe(books => {
      if (JSON.stringify(this.books) !== JSON.stringify(books)) {
        console.table(books)

        this.books = books
      }
    })
  }

  selectBook(book: IBook) {
    this.router.navigate([book.isbn], { relativeTo: this.route });
  }
}
