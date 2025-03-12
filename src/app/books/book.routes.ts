import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';
import { FavComponent } from './fav/fav.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const bookRoutes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: '',
        component: BookListComponent,
      },
      {
        path: 'fav',
        component: FavComponent,
      },
      {
        path: ':isbn',
        component: BookDetailsComponent,
      },
    ],
  },
];
export default bookRoutes;
