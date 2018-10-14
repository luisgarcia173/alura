import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidator } from './user-not-taken.validator';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { usernamePassword } from './username-password.validator';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ UserNotTakenValidator ]
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private signupService: SignupService,
    private platformService: PlatformDetectorService,
    private userNotTakenValidator: UserNotTakenValidator,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      username: ['', // 0 - default value
        [ // 1 - synchronous validator
          Validators.required,
          lowerCaseValidator, // Validators.pattern(/^[a-z0-9_\-]+$/),
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidator.checkUsernameTaken() // 2 - async validators
      ],
      fullname: ['', 
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      password: ['', 
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    },
    {
      validator: usernamePassword
    });
    this.platformService.isPlatformBrowser() && this.emailInput.nativeElement.focus();
  }

  signup() {
    //if (this.signupForm.valid && !this.signupForm.pending) // 
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService
      .signup(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
  }

}
