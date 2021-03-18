import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTenSanPhamComponent } from './select-ten-san-pham.component';
import { NbSelectModule } from '@nebular/theme';



@NgModule({
  declarations: [SelectTenSanPhamComponent],
  imports: [
    CommonModule,
    NbSelectModule,
  ],
  exports: [SelectTenSanPhamComponent],
})
export class SelectTenSanPhamModule { }
