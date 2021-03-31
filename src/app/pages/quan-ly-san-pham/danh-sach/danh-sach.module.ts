import { FormsModule } from '@angular/forms';
import { SelectNhaCungCapModule } from './../../../shared/components/select-nha-cung-cap/select-nha-cung-cap.module';
import { SelectRoleModule } from './../../../shared/components/select-role/select-role.module';
import { SelectTenSanPhamModule } from './../../../shared/components/select-ten-san-pham/select-ten-san-pham.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachComponent } from './danh-sach.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { NgnDatatableModule } from 'ngn-datatable';
import { SelectCTKMModule } from 'app/shared/components/select-ctkm/select-ctkm.module';

@NgModule({
  declarations: [DanhSachComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    NgnDatatableModule,
    FormsModule,
    NbButtonModule,
    SelectTenSanPhamModule,
    SelectNhaCungCapModule,
    SelectCTKMModule,
    RouterModule.forChild([
      {
        path: '',
        component: DanhSachComponent,
      },
    ]),
  ],
})
export class DanhSachModule { }
