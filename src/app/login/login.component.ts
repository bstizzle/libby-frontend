import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_name!: String
  password!: String

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login()
  {
    if (this.userService.logIn(this.user_name, this.password))
    {
      console.log(this.userService.current_user)
      this.router.navigate(['/home'])
    } else {
      alert("Login invalid")
    }
  }

}
