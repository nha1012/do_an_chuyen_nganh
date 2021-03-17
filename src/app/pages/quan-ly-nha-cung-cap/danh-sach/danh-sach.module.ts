import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgnDatatableModule } from 'ngn-datatable';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectNhanVienModule } from 'app/shared/components/select-nhan-vien/select-nhan-vien.module';
import { SelectRoleModule } from 'app/shared/components/select-role/select-role.module';
import { DanhSachComponent } from './danh-sach.component';

@NgModule({
  declarations: [DanhSachComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    NgnDatatableModule,
    FormsModule,
    SelectNhanVienModule,
    NbButtonModule,
    SelectRoleModule,
    RouterModule.forChild([{ path: '', component: DanhSachComponent }]),
  ],
})
export class DanhSachModule { }
