import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachKhachHangComponent } from './danh-sach-khach-hang.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DanhSachKhachHangComponent],
  imports: [
    CommonModule, RouterModule.forChild([{
      path: '',
      component: DanhSachKhachHangComponent,
    }]),
  ],
})
export class DanhSachKhachHangModule { }
