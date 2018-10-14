import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user';
import { environment } from "src/environments/environment";

const API = environment.apiURL;

//@Injectable({ providedIn: 'root' }) // Global
@Injectable() //Local, should be declared in Module Providers
export class SignupService {

  constructor(private http: HttpClient) { }

  checkUsernameTaken(username: string) {
    return this.http.get(API + '/user/exists/' + username);
  }

  signup(newUser: NewUser) {
    return this.http.post(API + '/user/signup', newUser);
  }

}
