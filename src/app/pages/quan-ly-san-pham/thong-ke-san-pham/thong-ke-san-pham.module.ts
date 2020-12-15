import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongKeSanPhamComponent } from './thong-ke-san-pham.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ThongKeSanPhamComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThongKeSanPhamComponent,
      },
    ]),
  ],
})
export class ThongKeSanPhamModule {}
