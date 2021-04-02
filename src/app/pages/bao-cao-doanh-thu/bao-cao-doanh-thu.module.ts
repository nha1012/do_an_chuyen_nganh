import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoDoanhThuComponent } from './bao-cao-doanh-thu.component';
import { RouterModule } from '@angular/router';
import { NbAlertModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BaoCaoDoanhThuComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbDatepickerModule,
    NgxChartsModule,
    FormsModule,
    NbAlertModule,
    RouterModule.forChild([{
      path: '',
      component: BaoCaoDoanhThuComponent,
    }]),
  ],
})
export class BaoCaoDoanhThuModule { }
