import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThongKeSanPhamComponent } from './thong-ke-san-pham.component';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from 'app/@theme/theme.module';
import { NbAlertModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [ThongKeSanPhamComponent],
  imports: [
    CommonModule,
    CommonModule,
    HttpClientModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NgxChartsModule,
    NbAlertModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThongKeSanPhamComponent,
      },
    ]),
  ],
})
export class ThongKeSanPhamModule { }
