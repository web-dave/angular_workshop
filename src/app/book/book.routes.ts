import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books/books.component';

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
    ],
  },
];
export default bookRoutes;
