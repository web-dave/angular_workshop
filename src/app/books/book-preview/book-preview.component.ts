import {
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { IBook } from '../book';

@Component({
  selector: 'app-book-preview',
  imports: [],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss',
})
export class BookPreviewComponent {
  book = input.required<IBook>();
  bookSelected = output<IBook>();

  goTo() {
    if (this.book()) {
      this.bookSelected.emit(this.book());
    }
  }
}
