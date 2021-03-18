import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanHangComponent } from './ban-hang.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { NgnDatatableModule } from 'ngn-datatable';
import { CellHinhAnhMinhHoaModule } from 'app/shared/components/cell-hinh-anh-minh-hoa/cell-hinh-anh-minh-hoa.module';
import { SelectTenSanPhamModule } from 'app/shared/components/select-ten-san-pham/select-ten-san-pham.module';
import { CellSoLuongSanPhamModule } from 'app/shared/components/cell-so-luong-san-pham/cell-so-luong-san-pham.module';



@NgModule({
  declarations: [BanHangComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NgnDatatableModule,
    NbButtonModule,
    CellHinhAnhMinhHoaModule,
    SelectTenSanPhamModule,
    CellSoLuongSanPhamModule,
    RouterModule.forChild([{ path: '', component: BanHangComponent }]),
  ],
})
export class BanHangModule { }
