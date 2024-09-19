import { Routes } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { BookPostComponent } from './book-post/book-post.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchComponent } from './search/search.component';
import { AuthorsComponent } from './authors/authors.component';
import { SectionsComponent } from './sections/sections.component';
import { CategoryBooksComponent } from './category-books/category-books.component';
import { AuthorBooksComponent } from './author-books/author-books.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderComponent } from './order/order.component';
import { guardGuard } from './guard.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AllBooksComponent },
  { path: 'post', component: BookPostComponent, pathMatch: 'full' },
  { path: 'authors', component: AuthorsComponent, pathMatch: 'full' },
  { path: 'sections', component: SectionsComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'cart', component: OrderComponent, pathMatch: 'full' },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [guardGuard],
    pathMatch: 'full',
  },
  { path: 'Register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'details/:id', component: BookDetailsComponent, pathMatch: 'full' },
  {
    path: 'category/:category',
    component: CategoryBooksComponent,
    pathMatch: 'full',
  },
  {
    path: 'Author/:Author',
    component: AuthorBooksComponent,
    pathMatch: 'full',
  },
  {
    path: 'search/:query',
    component: SearchComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'home' },
];
