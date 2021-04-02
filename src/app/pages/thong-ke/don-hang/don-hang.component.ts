import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { TypeTGBaoCao } from 'app/shared/services/transaction/transaction.interface';
import { TransactionService } from 'app/shared/services/transaction/transaction.service';
import * as moment from 'moment';
import { RequestQueryBuilder } from 'nest-crud-client';
import { count, map } from 'rxjs/operators';
import { DataChartLineEntity } from '../nhan-su/data-chart.interface';

@Component({
  selector: 'ngx-don-hang',
  templateUrl: './don-hang.component.html',
  styleUrls: ['./don-hang.component.scss'],
})
export class DonHangComponent implements OnInit {
  transactions = [];
  tgMuaHang: any;
  constructor(private transactionService: TransactionService, private toast: NbToastrService) {
  }

  async ngOnInit() {
  }
  async baoCao() {
    if (this.tgMuaHang) {
      const startDate: Date = (this.tgMuaHang as any).start;
      const endDate: Date = (this.tgMuaHang as any).end;
      this.transactionService.getThongKe({
        startDate, endDate,
      }).subscribe((value: { datas: [] }) => this.transactions = value.datas);
    } else {
      this.toast.warning('Vui lòng chọn thời gian');
    }
  }
}
