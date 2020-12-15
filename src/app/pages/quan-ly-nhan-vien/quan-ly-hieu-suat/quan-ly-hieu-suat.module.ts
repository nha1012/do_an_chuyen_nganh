import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RouterModule } from '@angular/router';
import { QuanLyHieuSuatComponent } from './quan-ly-hieu-suat.component';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: QuanLyHieuSuatComponent },
    ]),
  ],
})
export class QuanLyHieuSuatModule {}
