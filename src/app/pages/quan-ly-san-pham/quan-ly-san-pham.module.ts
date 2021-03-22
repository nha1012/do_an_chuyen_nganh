import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxEditorModule,
    FormsModule,
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
      {
        path: 'them-moi',
        loadChildren: () =>
          import('./quan-ly-kho/them-moi/them-moi.module').then((m) => m.ThemMoiModule),
      },
      {
        path: 'quan-ly-kho',
        loadChildren: () =>
          import('./quan-ly-kho/quan-ly-kho.module').then(
            (m) => m.QuanLyKhoModule,
          ),
      },
      {
        path: 'chi-tiet',
        loadChildren: () =>
          import('./chi-tiet/chi-tiet.module').then((t) => t.ChiTietModule),
      },
    ]),
  ],
})
export class QuanLySanPhamModule { }
