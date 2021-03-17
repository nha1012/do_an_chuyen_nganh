import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanHangComponent } from './ban-hang.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { NgnDatatableModule } from 'ngn-datatable';



@NgModule({
  declarations: [BanHangComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NgnDatatableModule,
    NbButtonModule,
    RouterModule.forChild([{ path: '', component: BanHangComponent }]),
  ],
})
export class BanHangModule { }
