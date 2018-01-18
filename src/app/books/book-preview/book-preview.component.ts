import { environment } from '../../../environments/environment'
import { Component, EventEmitter, Input, OnInit, Output, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'
import { IBook } from '../shared/custom-types';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: "app-book-preview",
  templateUrl: "./book-preview.component.html",
  styleUrls: ["./book-preview.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewComponent implements OnInit, OnChanges {
  @Input() book: IBook;
  @Output() bookselected = new EventEmitter();
  btnId
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    if (environment.production) {
      this.btnId = 'foo'
    } else {
      this.btnId = 'details_' + this.book.isbn
    }
  }

  trigger() {
    console.log('trigger')
    this.cdr.detectChanges()
  }


  ngOnChanges(changes) {
    console.warn('-->', changes)
  }

  selectThisBook() {
    this.bookselected.emit(this.book);
  }
}
