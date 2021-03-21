import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectKhachHangComponent } from './select-khach-hang.component';
import { NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SelectKhachHangComponent],
  imports: [
    CommonModule, NbSelectModule, FormsModule,
  ],
  exports: [SelectKhachHangComponent],
})
export class SelectKhachHangModule { }
