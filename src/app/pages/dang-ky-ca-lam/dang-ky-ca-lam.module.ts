import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangKyCaLamComponent } from './dang-ky-ca-lam.component';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { SelectCaLamModule } from 'app/shared/components/select-ca-lam/select-ca-lam.module';


@NgModule({
  declarations: [DangKyCaLamComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    SelectCaLamModule,
    NbSelectModule,
    RouterModule.forChild([{ path: '', component: DangKyCaLamComponent }]),
  ],
})
export class DangKyCaLamModule { }
