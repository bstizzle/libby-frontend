import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser!: User

  isLoggedin = false

  constructor(private router: Router, private userService: UserService) {
    
   }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
       this.isLoggedin = this.userService.isLoggedIn;
       this.currentUser = this.userService.current_user
      }
    })
  }

  Logout()
  {
    console.log("logged out")
    this.userService.logOut()
  }

}
