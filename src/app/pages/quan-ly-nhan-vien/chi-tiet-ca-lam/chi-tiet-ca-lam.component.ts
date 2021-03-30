import viLocale from '@fullcalendar/core/locales/vi';
import { TypeEvent } from './../../dang-ky-ca-lam/type-event.interface';
import { mergeMap } from 'rxjs/operators';
import { CaLamEnum } from 'app/shared/services/workshift/workshift.interface';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { WorkshiftService } from 'app/shared/services/workshift/workshift.service';
import { getUserId } from 'app/shared/services/app.service';
import { ActivatedRoute } from '@angular/router';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Calendar } from '@fullcalendar/core';

@Component({
  selector: 'ngx-chi-tiet-ca-lam',
  templateUrl: './chi-tiet-ca-lam.component.html',
  styleUrls: ['./chi-tiet-ca-lam.component.scss'],
})
export class ChiTietCaLamComponent implements OnInit {
  events: TypeEvent[];
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    height: 600,
    locale: viLocale,
  };
  CaLamEnum = CaLamEnum;
  useId: string;
  constructor(private workshiftService: WorkshiftService, private route: ActivatedRoute) {
    const name = Calendar.name;
    this.useId = this.route.snapshot.paramMap.get('userId');
    this.workshiftService.getMany({ filter: { field: 'userId', operator: '$eq', value: this.useId } })
      .pipe(
        mergeMap(value => {
          const data: TypeEvent[] = [];
          value.forEach(event => {
            let color = 'blue';
            if (event.workshift === CaLamEnum.SANG) {
              color = 'green';
            }
            if (event.workshift === CaLamEnum.TOI) {
              color = 'yellow';
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
}
