import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[gaTag]'
})
export class TagDirective {
  @HostBinding('style.width') get width() {
    return 'fit-content';
  }
  @HostBinding('style.padding') get padding() {
    return '6px';
  }
  @HostBinding('style.margin') get margin() {
    return '0';
  }
  constructor() { }

}
