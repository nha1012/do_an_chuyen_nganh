import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectRoleComponent } from './select-role.component';
import { NbSelectModule } from '@nebular/theme';



@NgModule({
  declarations: [SelectRoleComponent],
  imports: [
    CommonModule, NbSelectModule,
  ],
  exports: [SelectRoleComponent],
})
export class SelectRoleModule { }
