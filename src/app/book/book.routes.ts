import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const bookRoutes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        title: 'All',
        component: BookListComponent,
      },
      {
        path: ':isbn',
        title: 'Eins Book',
        component: BookDetailsComponent,
      },
    ],
  },
];
export default bookRoutes;
