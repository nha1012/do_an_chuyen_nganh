import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { SelectThuocTinhComponent } from './select-thuoc-tinh.interface';



@NgModule({
  declarations: [SelectThuocTinhComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbSelectModule,
  ],
  exports: [SelectThuocTinhComponent],
})
export class SelectThuocTinhModule { }
