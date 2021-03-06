import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/common';
import { NbDialogService, NbToastrService } from '@nebular/theme';
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
import interactionPlugin from '@fullcalendar/interaction';
import * as moment from 'moment';
import { CRUD_MESSAGES } from 'app/shared/messages/crud.messages';

@Component({
  selector: 'ngx-dang-ky-ca-lam',
  templateUrl: './dang-ky-ca-lam.component.html',
  styleUrls: ['./dang-ky-ca-lam.component.scss'],
})
export class DangKyCaLamComponent implements OnInit {
  events: TypeEvent[];
  CaLamEnum = CaLamEnum;
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    height: 600,
    locale: viLocale,
    eventClick: this.handleEventClick.bind(this),
  };
  isClick = false;
  constructor(
    private dialogService: NbDialogService,
    private workshiftService: WorkshiftService,
    private toast: NbToastrService) {
    const name = Calendar.name;
    this.loadData();
  }
  async loadData() {
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
              id: event.workshiftId,
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
  isValid(date: string, message: string) {
    const dateNow = moment(new Date()).format('YYYY-MM-DD');
    const coditionDate = moment(date).isBefore(dateNow);
    if (coditionDate) {
      throw new Error(message);
    }
    return true;
  }
  ngOnInit(): void { }
  handleDateClick(arg) {
    const date = arg.dateStr;
    try {
      this.isValid(date, 'Không được đăng ký lại ngày ');
      this.dialogService.open(DangKyCaLamDialogComponent, { context: { date: arg.date, data: arg } }).onClose
        .subscribe(value => {
          this.loadData();
        });
    } catch (error) {
      this.toast.warning(error);
    }
  }
  async handleEventClick(event) {
    if (this.isClick) {
      return;
    }
    try {
      const { startStr } = event.event;
      this.isValid(startStr, 'Không thể xoá ca làm này ');
      this.isClick = true;
      event.jsEvent.preventDefault();
      const { id } = event.event;
      await this.workshiftService.delete(id).toPromise();
      await this.loadData();
      this.isClick = false;
      this.toast.success(CRUD_MESSAGES.SUCCESS_DELETE);
    } catch (error) {
      this.toast.danger(error);
    }
  }
}
