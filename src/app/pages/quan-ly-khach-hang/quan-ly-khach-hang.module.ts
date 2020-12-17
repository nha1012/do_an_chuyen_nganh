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
      },
      {
        path: 'quan-ly-tai-khoan',
        loadChildren: () =>
          import('./quan-ly-tai-khoan/quan-ly-tai-khoan.module').then(
            (m) => m.QuanLyTaiKhoanModule,
          ),
      },
    ]),
  ],
})
export class QuanLyKhachHangModule {}
