import { NgModule } from '@angular/core';
import { TagDirective } from './tag.directive';
import { CommonModule } from '@angular/common';
import { ButtonGroupDirective } from './button-group.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [TagDirective, ButtonGroupDirective],
    exports: [TagDirective, ButtonGroupDirective]
})
export class DirectiveModule { }
