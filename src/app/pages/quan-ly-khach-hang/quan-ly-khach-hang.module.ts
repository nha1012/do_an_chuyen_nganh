import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'quan-ly-tai-khoan',
      },
      {
        path: 'quan-ly-tai-khoan',
        loadChildren: () =>
          import('./quan-ly-tai-khoan/quan-ly-tai-khoan.module').then(
            (m) => m.QuanLyTaiKhoanModule,
          ),
      },
      {
        path: 'chi-tiet/:id',
        loadChildren: () =>
          import('./chi-tiet/chi-tiet.module').then(
            (m) => m.ChiTietModule,
          ),
      },
    ]),
  ],
})
export class QuanLyKhachHangModule { }
