import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'quan-ly-tai-khoan',
        pathMatch: 'full',
      },
      {
        path: 'quan-ly-tai-khoan',
        loadChildren: () =>
          import('./quan-ly-tai-khoan/quan-ly-tai-khoan.module').then(
            (m) => m.QuanLyTaiKhoanModule,
          ),
      },
      {
        path: 'them-nhan-vien',
        loadChildren: () =>
          import('./them-nhan-vien/them-nhan-vien.module').then(
            (m) => m.ThemNhanVienModule,
          ),
      },
      {
        path: 'quan-ly-ca-lam',
        loadChildren: () =>
          import('./quan-ly-ca-lam/quan-ly-ca-lam.module').then(
            (m) => m.QuanLyCaLamModule,
          ),
      },
    ]),
  ],
})
export class QuanLyNhanVienModule { }
