import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>; // convention ($) to understand var is an Observable
  //user: User;

  constructor(
    private userService: UserService,
    private router: Router) { // Without private means it will only be used by constructor
    
      this.user$ = userService.getUser();
    //this.user$.subscribe(user => this.user = user); // Using pipe async do subscribe by template
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']); // Go to Login
  }

}
