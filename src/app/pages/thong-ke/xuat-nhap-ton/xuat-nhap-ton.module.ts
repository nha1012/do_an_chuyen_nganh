import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XuatNhapTonComponent } from './xuat-nhap-ton.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NbAlertModule, NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';



@NgModule({
  declarations: [XuatNhapTonComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    NbAlertModule,
    RouterModule.forChild([{
      path: '', component: XuatNhapTonComponent,
    }]),
  ],
})
export class XuatNhapTonModule { }
