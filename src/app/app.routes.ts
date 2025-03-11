import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'books',
    loadChildren: () => import('./books/book.routes'),
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
];
