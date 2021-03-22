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
        path: 'don-hang',
        loadChildren: () =>
          import('./don-hang/don-hang.module').then((m) => m.DonHangModule),
      },
      {
        path: 'xuat-nhap-ton',
        loadChildren: () =>
          import('./xuat-nhap-ton/xuat-nhap-ton.module').then((m) => m.XuatNhapTonModule),
      },
      {
        path: 'nhan-su',
        loadChildren: () =>
          import('./nhan-su/quan-ly-hieu-suat.module').then(
            (m) => m.QuanLyHieuSuatModule,
          ),
      },
      {
        path: 'san-pham',
        loadChildren: () =>
          import('./thong-ke-san-pham/thong-ke-san-pham.module').then(
            (m) => m.ThongKeSanPhamModule,
          ),
      },
    ]),
  ],
})
export class ThongKeModule { }
