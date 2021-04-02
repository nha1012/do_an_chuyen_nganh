import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChuongTrinhKhuyenMaiComponent } from './chuong-trinh-khuyen-mai.component';
import { RouterModule } from '@angular/router';
import { NbAlertModule, NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SelectCTKMModule } from 'app/shared/components/select-ctkm/select-ctkm.module';



@NgModule({
  declarations: [ChuongTrinhKhuyenMaiComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NgxChartsModule,
    NbAlertModule,
    SelectCTKMModule,
    RouterModule.forChild([{
      path: '',
      component: ChuongTrinhKhuyenMaiComponent,
    }]),
  ],
})
export class ChuongTrinhKhuyenMaiModule { }
