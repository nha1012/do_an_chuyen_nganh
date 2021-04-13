import { RouterModule } from '@angular/router';
import { NgnDatatableModule } from 'ngn-datatable';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietDonHangComponent } from './chi-tiet-don-hang.component';



@NgModule({
  declarations: [ChiTietDonHangComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NgnDatatableModule,
    NbIconModule,
    NbInputModule,
    NbButtonModule,
    RouterModule.forChild([{ path: ':id', component: ChiTietDonHangComponent }]),
  ],
})
export class ChiTietDonHangModule { }
