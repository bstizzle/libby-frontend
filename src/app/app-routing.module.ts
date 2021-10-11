import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BooklistComponent } from './booklist/booklist.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HomeComponent } from './home/home.component';
import { UserGuard } from './user.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BookListGuard } from './book-list.guard';
import { ErrorComponent } from './error/error.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'book/:id', 
  canActivate: [BookListGuard],
  component: BookViewComponent},
  {path: 'books', component: BooklistComponent},
  {path: 'addBook', component: AddBookComponent},
  {path: 'editBook/:id',
  canActivate: [UserGuard, BookListGuard],
  component: EditBookComponent},
  {path: 'user', component: UserProfileComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
