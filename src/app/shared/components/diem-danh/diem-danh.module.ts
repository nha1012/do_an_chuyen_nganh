import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiemDanhComponent } from './diem-danh.component';
import { NbCheckboxModule } from '@nebular/theme';

@NgModule({
  declarations: [DiemDanhComponent],
  imports: [CommonModule, NbCheckboxModule],
  exports: [DiemDanhComponent],
})
export class DiemDanhModule {}
