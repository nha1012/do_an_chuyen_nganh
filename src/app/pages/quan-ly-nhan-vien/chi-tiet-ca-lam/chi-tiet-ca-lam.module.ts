import { SelectCaLamModule } from 'app/shared/components/select-ca-lam/select-ca-lam.module';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietCaLamComponent } from './chi-tiet-ca-lam.component';
import { FullCalendarModule } from '@fullcalendar/angular';
@NgModule({
  declarations: [ChiTietCaLamComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    NbCardModule,
    NbInputModule,
    SelectCaLamModule,
    NbSelectModule,
    RouterModule.forChild([{ path: ':userId', component: ChiTietCaLamComponent }]),
  ],
})
export class ChiTietCaLamModule { }
