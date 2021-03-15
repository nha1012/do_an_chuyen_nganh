import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { FormsModule } from '@angular/forms';

import { DanhSachComponent } from './danh-sach.component';

@NgModule({
  declarations: [DanhSachComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    FormsModule,
    Ng2SmartTableModule,
    RouterModule.forChild([
      {
        pathMatch: 'full',
        path: '',
        component: DanhSachComponent,
      },
    ]),
  ],
  providers: [
  ],
})
export class DanhSachModule { }
