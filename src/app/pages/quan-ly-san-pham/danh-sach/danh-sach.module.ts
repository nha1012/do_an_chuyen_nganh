import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachComponent } from './danh-sach.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { NgnDatatableModule } from 'ngn-datatable';

@NgModule({
  declarations: [DanhSachComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    NgnDatatableModule,
    RouterModule.forChild([
      {
        path: '',
        component: DanhSachComponent,
      },
    ]),
  ],
})
export class DanhSachModule { }
