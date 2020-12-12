import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyTaiKhoanComponent } from './quan-ly-tai-khoan.component';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [QuanLyTaiKhoanComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    RouterModule.forChild([{ path: '', component: QuanLyTaiKhoanComponent }])
  ]
})
export class QuanLyTaiKhoanModule {}
