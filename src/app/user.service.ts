import { Injectable } from '@angular/core';
import { Book } from './book';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn = false

  user_list: User[] = [new User("klineconnor", "password", "klineconnor@yahoo.com", true)]

  current_user: User = new User('', '', '', false)

  constructor() { }

  addBook(book: Book)
  {
    console.log(book)
    this.current_user.bookList.push(book)
  }

  addHold(book: Book)
  {
    this.current_user.holdList.push(book)
  }

  removeBook(id: number)
  {
    this.current_user.bookList.splice(id, 1)
  }

  logOut()
  {
    this.current_user = new User('', '', '', false)
  }

  logIn(userName: String, password: String): Boolean
  {
    if (this.user_list.some( user => user.user_name == userName))
    {
      const tempUser = this.user_list.find( user => user.user_name == userName)
      if (tempUser?.password == password)
      {
        this.current_user = tempUser
        this.isLoggedIn = true
        return true
      } else {
        return false
      }
    } else {
      return false
    }
      
  }
}
