import { SelectCaLamModule } from 'app/shared/components/select-ca-lam/select-ca-lam.module';
import { RouterModule } from '@angular/router';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { NbCardModule, NbInputModule, NbSelectModule, NbButtonModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietCaLamComponent } from './chi-tiet-ca-lam.component';
import { FullCalendarModule } from '@fullcalendar/angular';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [ChiTietCaLamComponent],
  imports: [
    CommonModule,
    NbCardModule,
    FullCalendarModule,
    NbInputModule,
    SelectCaLamModule,
    NbSelectModule,
    RouterModule.forChild([{ path: ':id', component: ChiTietCaLamComponent}]),
  ],
})
export class ChiTietCaLamModule { }
