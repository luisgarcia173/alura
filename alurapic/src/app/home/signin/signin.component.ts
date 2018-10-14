import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'ap-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  fromUrl: string;
  loginForm: FormGroup;
  @ViewChild('userNameInput') usernameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private platformService: PlatformDetectorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => this.fromUrl = params['fromUrl']);

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required], //0-default value, 1-Validation
      password: ['', Validators.required]
    });

    this.platformService.isPlatformBrowser() && this.usernameInput.nativeElement.focus();
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.authService
      .authenticate(username, password)
      .subscribe(
        () => this.fromUrl ?
            this.router.navigateByUrl(this.fromUrl) :
            this.router.navigate(['user', username]),
        err => {
          console.log(err);
          this.loginForm.reset();
          this.platformService.isPlatformBrowser() && this.usernameInput.nativeElement.focus();
          alert('Invalid username or password!');
        }
      );

  }

}
