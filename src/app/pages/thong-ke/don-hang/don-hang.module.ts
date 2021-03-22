import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonHangComponent } from './don-hang.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [DonHangComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    NbCardModule,
    RouterModule.forChild([{
      path: '', component: DonHangComponent,
    }]),
  ],
})
export class DonHangModule { }
