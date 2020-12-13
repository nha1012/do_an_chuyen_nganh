import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangKyCaLamComponent } from './dang-ky-ca-lam.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {
  SmartTableDatepickerComponent,
  SmartTableDatepickerRenderComponent,
} from './smart-table-datepicker/smart-table-datepicker.component';
import {
  MomentDateTimeAdapter,
  OWL_MOMENT_DATE_TIME_ADAPTER_OPTIONS,
} from 'ng-pick-datetime/date-time/adapter/moment-adapter/moment-date-time-adapter.class';

import { FormsModule } from '@angular/forms';
import {
  DateTimeAdapter,
  OWL_DATE_TIME_FORMATS,
  OWL_DATE_TIME_LOCALE,
} from 'ng-pick-datetime';

export const MY_CUSTOM_FORMATS = {
  fullPickerInput: 'YYYY-MM-DD',
  parseInput: 'YYYY-MM-DD',
  datePickerInput: 'YYYY-MM-DD',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY',
};
@NgModule({
  declarations: [DangKyCaLamComponent, SmartTableDatepickerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    OwlDateTimeModule,
    FormsModule,
    OwlNativeDateTimeModule,
    Ng2SmartTableModule,
    RouterModule.forChild([
      {
        pathMatch: 'full',
        path: '',
        component: DangKyCaLamComponent,
      },
    ]),
  ],
  entryComponents: [
    SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent,
  ],
  providers: [
    {
      provide: DateTimeAdapter,
      useClass: MomentDateTimeAdapter,
      deps: [OWL_DATE_TIME_LOCALE],
    },
    { provide: OWL_DATE_TIME_FORMATS, useValue: MY_CUSTOM_FORMATS },
  ],
})
export class DangKyCaLamModule {}
