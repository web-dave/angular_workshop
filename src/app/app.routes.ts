import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    loadChildren: () => import('./books/books.routes'),
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
