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
        redirectTo: 'danh-muc-san-pham',
        pathMatch: 'full',
      },
      {
        path: 'danh-muc-san-pham',
        loadChildren: () =>
          import('./danh-muc-san-pham/danh-muc-san-pham.module').then(
            (m) => m.DanhMucSanPhamModule,
          ),
      },
    ]),
  ],
})
export class QuanLyDanhMucModule {}
