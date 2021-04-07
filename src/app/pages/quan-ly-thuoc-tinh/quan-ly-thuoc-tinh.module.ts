import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild([{
      path:'thuoc-tinh-san-pham', 
      loadChildren: () =>
          import('./thuoc-tinh-san-pham/thuoc-tinh-san-pham.module').then(
            (m) => m.ThuocTinhSanPhamModule,
          ),

    }])
  ]
})
export class QuanLyThuocTinhModule { }
