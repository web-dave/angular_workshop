import { environment } from '../../../environments/environment'
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { IBook } from '../shared/custom-types';

@Component({
  selector: "app-book-preview",
  templateUrl: "./book-preview.component.html",
  styleUrls: ["./book-preview.component.scss"]
})
export class BookPreviewComponent implements OnInit {
  @Input() book: IBook;
  @Output() bookselected = new EventEmitter();
  btnId
  constructor() { }

  ngOnInit() {
    if (environment.production) {
      this.btnId = 'foo'
    } else {
      this.btnId = 'details_' + this.book.isbn
    }
  }

  selectThisBook() {
    this.bookselected.emit(this.book);
  }
}
