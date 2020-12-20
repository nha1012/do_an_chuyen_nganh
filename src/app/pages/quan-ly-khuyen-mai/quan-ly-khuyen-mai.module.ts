import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DanhSachComponent } from './danh-sach/danh-sach.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'danh-sach',
        pathMatch: 'full',
        redirectTo: 'danh-sach',
      },
      {
      path: 'danh-sach',
      component: DanhSachComponent,
    }]),
  ],
})
export class QuanLyKhuyenMaiModule { }
