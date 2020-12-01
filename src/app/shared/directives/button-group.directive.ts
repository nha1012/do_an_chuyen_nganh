import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[gaButtonGroup]'
})
export class ButtonGroupDirective {
  @HostBinding('style.display') get display() {
    return 'flex';
  }
  @HostBinding('style.justify-content') get justifyContent() {
    return 'flex-end';
  }
}
