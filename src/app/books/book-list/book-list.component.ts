import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { BooksService } from "../shared/books.service";
import { IBook } from "../shared/custom-types";
import { Router } from "@angular/router/";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent implements OnInit {
  books: IBook[];
  p
  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.booksService.getBooks().subscribe(books => (this.books = books));

  }

  ping() {
    // let book = Object.assign({}, this.books[1])
    let book = JSON.parse(JSON.stringify(this.books[1]))

    book.title = String(new Date())
    this.books[1] = book
  }

  selectBook(book: IBook) {
    this.router.navigate([book.isbn], { relativeTo: this.route });
  }
}
