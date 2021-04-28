import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RouterModule } from '@angular/router';
import { QuanLyHieuSuatComponent } from './quan-ly-hieu-suat.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SelectNhanVienModule } from 'app/shared/components/select-nhan-vien/select-nhan-vien.module';
import { SelectCaLamModule } from 'app/shared/components/select-ca-lam/select-ca-lam.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuanLyHieuSuatComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    NgxChartsModule,
    NbCardModule,
    NbDatepickerModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    SelectNhanVienModule,
    FormsModule,
    NbSpinnerModule,
    SelectCaLamModule,
    NbAlertModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: QuanLyHieuSuatComponent },
    ]),
  ],
})
export class QuanLyHieuSuatModule { }
