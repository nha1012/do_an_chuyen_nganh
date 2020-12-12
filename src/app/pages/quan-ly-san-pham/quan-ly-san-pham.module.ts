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
        redirectTo: 'danh-sach',
        pathMatch: 'full',
      },
      {
        path: 'danh-sach',
        loadChildren: () =>
          import('./danh-sach/danh-sach.module').then((m) => m.DanhSachModule),
      },
    ]),
  ],
})
export class QuanLySanPhamModule {}
