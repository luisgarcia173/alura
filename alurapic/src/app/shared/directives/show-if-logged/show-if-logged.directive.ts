import { Directive, ElementRef, HostListener, Renderer, Input, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[apShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  currentDisplay: string;

  constructor(
    private el: ElementRef<any>,
    private render: Renderer,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.currentDisplay = getComputedStyle(this.el.nativeElement).display;
    this.userService
      .getUser()
      .subscribe(user => {
        if (user) {
          this.render.setElementStyle(this.el.nativeElement, 'display', this.currentDisplay);
        } else {
          this.currentDisplay = getComputedStyle(this.el.nativeElement).display;
          this.render.setElementStyle(this.el.nativeElement, 'display', 'none');
        }
      })
  }
}
