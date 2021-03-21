import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyTaiKhoanComponent } from './quan-ly-tai-khoan.component';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { SelectRoleModule } from 'app/shared/components/select-role/select-role.module';
import { NgnDatatableModule } from 'ngn-datatable';
import { SelectKhachHangModule } from 'app/shared/components/select-khach-hang/select-khach-hang.module';

@NgModule({
  declarations: [QuanLyTaiKhoanComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    SelectKhachHangModule,
    SelectRoleModule,
    NgnDatatableModule,
    NbButtonModule,
    RouterModule.forChild([{ path: '', component: QuanLyTaiKhoanComponent }]),
  ],
})
export class QuanLyTaiKhoanModule {}
