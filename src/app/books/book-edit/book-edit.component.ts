import { Component, OnInit } from "@angular/core";
import { mergeMap } from "rxjs/operators";
import { IBook } from "../shared/custom-types";
import { BooksService } from "../shared/books.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-edit",
  templateUrl: "./book-edit.component.html",
  styleUrls: ["./book-edit.component.scss"]
})
export class BookEditComponent implements OnInit {
  book: IBook;
  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        mergeMap((params: { isbn: string }) =>
          this.booksService.getBook(params.isbn)
        )
      )
      .subscribe(book => (this.book = book as IBook));
  }

  saveBook(book) {
    this.booksService.updateBook(this.book).subscribe(() => {
      this.router.navigate([".."], { relativeTo: this.route });
    });
  }
}
