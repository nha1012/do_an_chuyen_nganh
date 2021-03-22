import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgnDatatableModule } from 'ngn-datatable';
import { NbButtonModule, NbCardModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SelectNhanVienModule } from 'app/shared/components/select-nhan-vien/select-nhan-vien.module';
import { SelectRoleModule } from 'app/shared/components/select-role/select-role.module';
import { DanhMucSanPhamComponent } from './danh-muc-san-pham.component';
import { SelectLoaiSanPhamModule } from 'app/shared/components/select-loai-san-pham/select-loai-san-pham.module';

@NgModule({
  declarations: [DanhMucSanPhamComponent],
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
    SelectLoaiSanPhamModule,
    SelectRoleModule,
    NbSpinnerModule,
    RouterModule.forChild([{ path: '', component: DanhMucSanPhamComponent }]),
  ],
})
export class DanhMucSanPhamModule { }
