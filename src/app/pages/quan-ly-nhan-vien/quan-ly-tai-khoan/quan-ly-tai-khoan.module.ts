import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyTaiKhoanComponent } from './quan-ly-tai-khoan.component';
import { RouterModule } from '@angular/router';
import { NgnDatatableModule } from 'ngn-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuanLyTaiKhoanComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NgnDatatableModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: QuanLyTaiKhoanComponent }]),
  ],
})
export class QuanLyTaiKhoanModule { }
