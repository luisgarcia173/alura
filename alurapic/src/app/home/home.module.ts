import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule
  ],
  declarations: [
    SigninComponent
  ]
})
export class HomeModule { }
