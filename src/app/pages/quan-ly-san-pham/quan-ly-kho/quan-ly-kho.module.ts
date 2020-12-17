import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyKhoComponent } from './quan-ly-kho.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [QuanLyKhoComponent],
  imports: [
    CommonModule,
    CommonModule,
    HttpClientModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuanLyKhoComponent,
      },
    ]),
  ],
})
export class QuanLyKhoModule {}
