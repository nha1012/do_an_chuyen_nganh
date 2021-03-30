import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/common';
import { NbDialogService } from '@nebular/theme';
// tslint:disable-next-line:max-line-length
import { DangKyCaLamDialogComponent } from 'app/shared/components/dang-ky-ca-lam-dialog/dang-ky-ca-lam-dialog.component';
import { getUserId } from 'app/shared/services/app.service';
import { CaLamEnum } from 'app/shared/services/workshift/workshift.interface';
import { WorkshiftService } from 'app/shared/services/workshift/workshift.service';
import { mergeMap } from 'rxjs/operators';
import { TypeEvent } from './type-event.interface';
import viLocale from '@fullcalendar/core/locales/vi';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'ngx-dang-ky-ca-lam',
  templateUrl: './dang-ky-ca-lam.component.html',
  styleUrls: ['./dang-ky-ca-lam.component.scss'],
})
export class DangKyCaLamComponent implements OnInit {
  events: TypeEvent[];
  CaLamEnum = CaLamEnum;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    height: 600,
    locale: viLocale,
  };
  constructor(private dialogService: NbDialogService, private workshiftService: WorkshiftService) {
    const name = Calendar.name;

    this.workshiftService.getMany({ filter: { field: 'userId', operator: '$eq', value: getUserId() } })
      .pipe(
        mergeMap(value => {
          const data: TypeEvent[] = [];
          value.forEach(event => {
            let color = 'blue';
            if (event.workshift === CaLamEnum.SANG) {
              color = 'green';
            } if (event.workshift === CaLamEnum.TOI) {
              color = 'black';
            }
            const typeEvent: TypeEvent = {
              title: event.workshift,
              date: event.date,
              color: color,
            };
            data.push(typeEvent);
          });
          this.events = data;
          this.calendarOptions.events = this.events;
          return data;
        }),
      ).toPromise();
  }
  ngOnInit(): void { }
  handleDateClick(arg) {
    this.dialogService.open(DangKyCaLamDialogComponent, { context: { date: arg.date, data: arg } }).onClose
      .subscribe(value => {
        this.events.push(value);
        this.calendarOptions.events = this.events;
      });
  }
}
