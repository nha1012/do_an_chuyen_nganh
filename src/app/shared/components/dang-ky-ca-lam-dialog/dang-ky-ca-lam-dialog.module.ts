import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { SelectCaLamModule } from 'app/shared/components/select-ca-lam/select-ca-lam.module';
import { DangKyCaLamDialogComponent } from './dang-ky-ca-lam-dialog.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
]);


@NgModule({
  declarations: [DangKyCaLamDialogComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    SelectCaLamModule,
    NbSelectModule,
    NbSpinnerModule,
  ],
  exports: [DangKyCaLamDialogComponent],
})
export class DangKyCaLamDialogModule { }
