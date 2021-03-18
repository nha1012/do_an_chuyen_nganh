import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { SelectCaLamModule } from 'app/shared/components/select-ca-lam/select-ca-lam.module';
import { PhieuMuaHangDialogComponent } from './phieu-mua-hang-dialog.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
]);


@NgModule({
  declarations: [PhieuMuaHangDialogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FullCalendarModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    SelectCaLamModule,
    NbSelectModule,
    NbSpinnerModule,
    FormsModule,
    NbTabsetModule,
  ],
  exports: [PhieuMuaHangDialogComponent],
})
export class DangKyCaLamDialogModule { }
