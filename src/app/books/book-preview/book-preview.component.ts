import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'app-book-preview',
  imports: [],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss',
})
export class BookPreviewComponent {
  @Input({ required: true }) book!: IBook;
  @Output() bookSelected = new EventEmitter<IBook>();

  goTo() {
    this.bookSelected.emit(this.book);
  }
}
