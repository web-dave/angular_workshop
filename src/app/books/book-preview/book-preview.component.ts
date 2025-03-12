import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-preview',
  imports: [],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss',
})
export class BookPreviewComponent {
  @Input() book: any;
  @Output() bookSelected = new EventEmitter<any>();

  goTo() {
    this.bookSelected.emit(this.book);
  }
}
