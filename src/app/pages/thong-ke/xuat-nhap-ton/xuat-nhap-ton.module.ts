import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XuatNhapTonComponent } from './xuat-nhap-ton.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [XuatNhapTonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: XuatNhapTonComponent,
    }]),
  ],
})
export class XuatNhapTonModule { }
