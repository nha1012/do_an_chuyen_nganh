import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectNhanVienComponent } from './select-nhan-vien.component';
import { NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SelectNhanVienComponent],
  imports: [
    CommonModule, NbSelectModule, FormsModule,
  ],
  exports: [SelectNhanVienComponent],
})
export class SelectNhanVienModule { }
