import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectLoaiSanPhamComponent } from './select-loai-san-pham.component';
import { NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SelectLoaiSanPhamComponent],
  imports: [
    CommonModule,
    NbSelectModule,
    FormsModule,
  ],
  entryComponents: [SelectLoaiSanPhamComponent],
  exports: [SelectLoaiSanPhamComponent],
})
export class SelectLoaiSanPhamModule { }
