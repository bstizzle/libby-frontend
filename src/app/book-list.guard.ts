import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from './book';
import { BookService } from './book.service';

@Injectable({
  providedIn: 'root'
})
export class BookListGuard implements CanActivate {

  newBook!: Book

  constructor(private router: Router, private bookService: BookService)
  {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const id = Number(route.paramMap.get('id'))
    
    this.bookService.getBook(id).subscribe(
      data => this.newBook = data
    )
    if (isNaN(id) || this.newBook === undefined)
    {
      this.router.navigate(['/error'])
      return false
    }
    return true
  }
  
}
