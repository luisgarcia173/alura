import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode'; //Decode JWT api

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  private username: string;

  constructor(private tokenService: TokenService) { 
    this.tokenService.hasToken() && this.decodeAndNotify(); //same as: if (true) then (do)
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLoged() {
    return this.tokenService.hasToken();
  }

  getUsername() {
    return this.username;
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User; //Casting: same structure
    this.username = user.name;
    this.userSubject.next(user);
  }

}
