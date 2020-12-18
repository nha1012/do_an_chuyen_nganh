import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChiTietComponent } from './chi-tiet.component';
import { NbCardModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [ChiTietComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    ThemeModule,
    Ng2SmartTableModule,
    RouterModule.forChild([{
      path: '',
      component: ChiTietComponent,
    }]),
  ],
})
export class ChiTietModule { }
