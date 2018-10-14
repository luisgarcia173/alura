import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserService } from '../user/user.service';
import { environment } from "src/environments/environment";

const API = environment.apiURL;

@Injectable({
  providedIn: 'root' //unica instancia app inteira
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService) { }

  authenticate(username: string, password: string) {
    return this.http
      .post(API + '/user/login', {username, password}, {observe: 'response'})
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.userService.setToken(authToken);
        console.log(`User ${username} authenticated with token ${authToken}`);
      }));
  }
}
