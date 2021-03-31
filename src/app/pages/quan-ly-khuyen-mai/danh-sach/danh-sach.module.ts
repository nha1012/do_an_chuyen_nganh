import { SelectKhachHangModule } from './../../../shared/components/select-khach-hang/select-khach-hang.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { DanhSachComponent } from './danh-sach.component';
import { SelectRoleModule } from 'app/shared/components/select-role/select-role.module';
import { NgnDatatableModule } from 'ngn-datatable';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DanhSachComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    SelectKhachHangModule,
    SelectRoleModule,
    NgnDatatableModule,
    NbButtonModule,
    FormsModule,
    NbDatepickerModule,
    RouterModule.forChild([{ path: '', component: DanhSachComponent }]),
  ],
})
export class DanhSachModule { }
