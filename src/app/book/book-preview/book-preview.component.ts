import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { IBook } from '../models/book.interface';

@Component({
  selector: 'app-book-preview',
  standalone: true,
  imports: [],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss',
})
export class BookPreviewComponent {
  // Signals beispiel
  book_ = input.required<IBook>();
  bookSelected_ = output<IBook>();

  value = input(1);
  valueChange = output<number>();

  data = model(2);

  @Input({ required: true }) book!: IBook;

  @Output() bookSelected = new EventEmitter();

  ping() {
    // this.bookSelected_.emit(this.book())
    this.bookSelected.emit(this.book);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.value.set(this.book);
  // }
  // value = signal({} as IBook);
}
