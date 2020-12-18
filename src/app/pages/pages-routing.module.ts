import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'quan-ly-nhan-vien',
      },
      {
        path: 'quan-ly-khach-hang',
        loadChildren: () =>
          import('./quan-ly-khach-hang/quan-ly-khach-hang.module').then(
            (m) => m.QuanLyKhachHangModule,
          ),
      },
      {
        path: 'dang-ky-ca-lam',
        loadChildren: () =>
          import('./dang-ky-ca-lam/dang-ky-ca-lam.module').then(
            (m) => m.DangKyCaLamModule,
          ),
      },
      {
        path: 'quan-ly-danh-muc',
        loadChildren: () =>
          import('./quan-ly-danh-muc/quan-ly-danh-muc.module').then(
            (m) => m.QuanLyDanhMucModule,
          ),
      },
      {
        path: 'quan-ly-nhan-vien',
        loadChildren: () =>
          import('./quan-ly-nhan-vien/quan-ly-nhan-vien.module').then(
            (m) => m.QuanLyNhanVienModule,
          ),
      },
      {
        path: 'quan-ly-san-pham',
        loadChildren: () =>
          import('./quan-ly-san-pham/quan-ly-san-pham.module').then(
            (m) => m.QuanLySanPhamModule,
          ),
      },
      {
        path: 'quan-ly-nha-cung-cap',
        loadChildren: () =>
          import('./quan-ly-nha-cung-cap/quan-ly-nha-cung-cap.module').then(
            (m) => m.QuanLyNhaCungCapModule,
          ),
      },
      {
        path: 'dashboard',
        component: ECommerceComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
