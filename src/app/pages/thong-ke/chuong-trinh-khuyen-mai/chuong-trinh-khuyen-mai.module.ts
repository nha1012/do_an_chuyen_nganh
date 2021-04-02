import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuongTrinhKhuyenMaiComponent } from './chuong-trinh-khuyen-mai.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ChuongTrinhKhuyenMaiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ChuongTrinhKhuyenMaiComponent,
    }]),
  ],
})
export class ChuongTrinhKhuyenMaiModule { }
