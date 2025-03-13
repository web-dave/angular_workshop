import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BooksComponent } from './books.component';
import { FavComponent } from './fav/fav.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';

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
      {
        path: ':isbn/edit',
        component: BookEditComponent,
      },
    ],
  },
];
export default bookRoutes;
