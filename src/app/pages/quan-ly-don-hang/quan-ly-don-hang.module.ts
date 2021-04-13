import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      redirectTo: 'danh-sach',
    },
    {
      path: 'danh-sach',
      loadChildren: () => import('./danh-sach/danh-sach.module').then(m => m.DanhSachModule),
    },
    {
      path: 'chi-tiet-don-hang',
      loadChildren: () =>
      import('./chi-tiet-don-hang/chi-tiet-don-hang.module').then(
        (m) => m.ChiTietDonHangModule),
    },
    ]),
  ],
})
export class QuanLyDonHangModule { }
