import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators'
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = "http://libmansys-backend.azurewebsites.net/books/"

  book_list: Book[] = [{title: "Harry Potter", author: "JK Rowling", category: "Fantasy", checkedOut: false, daysOut: 30}]

  getBooks(): Observable<Book[]>
  {
    return this.http.get<Book[]>(this.url).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  getBook(id: number)
  {
    return this.http.get<Book>(this.url + id).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }
  
  addBook(book: Book): Observable<any>
  {
    return this.http.post(this.url, book).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  updateBook(id: number, book: Book): Observable<any>
  {
    return this.http.put(this.url + id, book).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  deleteBook(id: number)
  {
    return this.http.delete(this.url + id).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  

  constructor(private http: HttpClient) { }

  private handleError(err: HttpErrorResponse)
  {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage)
  }
}
