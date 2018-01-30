import { mergeMap } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import { BooksService } from "../shared/books.service";
import { Router, ActivatedRoute } from "@angular/router";
import { IBook } from "../shared/custom-types";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.scss"]
})
export class BookDetailsComponent implements OnInit {
  book: IBook;
  constructor(
    private booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        mergeMap((params: { isbn: string }) => {
          console.log(params);
          return this.booksService.getBook(params.isbn);
        })
      )
      .subscribe(book => {
        this.book = book as IBook;
        // console.log(new PagesPipe().transform(book.numPages, "S."));
      });
  }
}
