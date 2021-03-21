import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CommonModule,
    HttpClientModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NgxEditorModule,
    RouterModule.forChild([
      {
        path: 'them-moi',
        loadChildren: () =>
          import('./them-moi/them-moi.module').then(
            (m) => m.ThemMoiModule,
          ),
      },
      {
        path: 'danh-sach',
        loadChildren: () =>
          import('./danh-sach/danh-sach.module').then(
            (m) => m.DanhSachModule,
          ),
      },
    ]),
  ],
})
export class QuanLyKhoModule { }
