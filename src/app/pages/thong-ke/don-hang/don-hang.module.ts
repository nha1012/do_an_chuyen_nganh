import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonHangComponent } from './don-hang.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NbAlertModule, NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DonHangComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    NbCardModule,
    FormsModule,
    NbDatepickerModule,
    NbButtonModule,
    NbInputModule,
    NbAlertModule,
    RouterModule.forChild([{
      path: '', component: DonHangComponent,
    }]),
  ],
})
export class DonHangModule { }
