import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from './models/book.interface';

@Pipe({
  name: 'bookFilter',
  standalone: true,
})
export class BookFilterPipe implements PipeTransform {
  transform(books: IBook[], search: string, field: string): IBook[] {
    return books.filter((book) =>
      (book as any)[field].toLowerCase().includes(search.toLowerCase())
    );
  }
}
