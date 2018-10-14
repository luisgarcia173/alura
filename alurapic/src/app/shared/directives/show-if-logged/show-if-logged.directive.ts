import { Directive, ElementRef, HostListener, Renderer, Input, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/user/user.service';

@Directive({
  selector: '[apShowIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {

  constructor(
    private el: ElementRef<any>,
    private render: Renderer,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    !this.userService.isLogged() && this.render.setElementStyle(this.el.nativeElement, 'display', 'none');
  }
}
