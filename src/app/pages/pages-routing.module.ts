import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

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
        path: 'iot-dashboard',
        component: DashboardComponent,
      },
      {
        path: 'layout',
        loadChildren: () =>
          import('./layout/layout.module').then((m) => m.LayoutModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./forms/forms.module').then((m) => m.FormsModule),
      },
      {
        path: 'ui-features',
        loadChildren: () =>
          import('./ui-features/ui-features.module').then(
            (m) => m.UiFeaturesModule,
          ),
      },
      {
        path: 'modal-overlays',
        loadChildren: () =>
          import('./modal-overlays/modal-overlays.module').then(
            (m) => m.ModalOverlaysModule,
          ),
      },
      {
        path: 'extra-components',
        loadChildren: () =>
          import('./extra-components/extra-components.module').then(
            (m) => m.ExtraComponentsModule,
          ),
      },
      {
        path: 'maps',
        loadChildren: () =>
          import('./maps/maps.module').then((m) => m.MapsModule),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./charts/charts.module').then((m) => m.ChartsModule),
      },
      {
        path: 'editors',
        loadChildren: () =>
          import('./editors/editors.module').then((m) => m.EditorsModule),
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./tables/tables.module').then((m) => m.TablesModule),
      },
      {
        path: 'miscellaneous',
        loadChildren: () =>
          import('./miscellaneous/miscellaneous.module').then(
            (m) => m.MiscellaneousModule,
          ),
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
