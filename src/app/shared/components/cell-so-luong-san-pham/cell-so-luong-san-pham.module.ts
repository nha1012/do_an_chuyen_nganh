import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellSoLuongSanPhamComponent } from './cell-so-luong-san-pham.component';
import { NbIconModule } from '@nebular/theme';



@NgModule({
  declarations: [CellSoLuongSanPhamComponent],
  imports: [
    CommonModule,
    NbIconModule,
  ],
  exports: [CellSoLuongSanPhamComponent],
})
export class CellSoLuongSanPhamModule { }
