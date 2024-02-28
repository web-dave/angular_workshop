import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'app-book-preview',
  standalone: true,
  imports: [],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss',
})
export class BookPreviewComponent {
  @Input() book: IBook | undefined;
  @Output() bookSelected = new EventEmitter<IBook>();

  showMore() {
    this.bookSelected.emit(this.book);
  }
}
