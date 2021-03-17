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

@Component({
  selector: 'ngx-dang-ky-ca-lam',
  templateUrl: './dang-ky-ca-lam.component.html',
  styleUrls: ['./dang-ky-ca-lam.component.scss'],
})
export class DangKyCaLamComponent implements OnInit {
  events: TypeEvent[];
  calendarOptions: CalendarOptions;
  CaLamEnum = CaLamEnum;
  constructor(private dialogService: NbDialogService, private workshiftService: WorkshiftService) {
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
          this.calendarOptions = {
            initialView: 'dayGridMonth',
            dateClick: this.handleDateClick.bind(this),
            events: this.events,
            height: 600,
            locale: viLocale,
          };
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
