import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoDoanhThuComponent } from './bao-cao-doanh-thu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BaoCaoDoanhThuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: BaoCaoDoanhThuComponent,
    }]),
  ],
})
export class BaoCaoDoanhThuModule { }
