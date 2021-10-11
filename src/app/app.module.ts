import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookViewComponent } from './book-view/book-view.component';
import { BooklistComponent } from './booklist/booklist.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EditBookComponent } from './edit-book/edit-book.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SortDirective } from './directive/sort.directive';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component'
import { NgxPaginationModule } from 'ngx-pagination';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BookViewComponent,
    BooklistComponent,
    AddBookComponent,
    EditBookComponent,
    UserProfileComponent,
    SortDirective,
    ErrorComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
