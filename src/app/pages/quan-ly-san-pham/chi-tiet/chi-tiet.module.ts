import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietComponent } from './chi-tiet.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbTabsetModule } from '@nebular/theme';
import { SelectLoaiSanPhamModule } from 'app/shared/components/select-loai-san-pham/select-loai-san-pham.module';
import { SelectNhaCungCapModule } from 'app/shared/components/select-nha-cung-cap/select-nha-cung-cap.module';



@NgModule({
  declarations: [ChiTietComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    SelectLoaiSanPhamModule,
    SelectNhaCungCapModule,
    NbTabsetModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: ChiTietComponent,
      },
    ]),
  ],
})
export class ChiTietModule { }
