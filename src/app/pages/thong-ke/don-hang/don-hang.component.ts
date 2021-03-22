import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'app/shared/services/transaction/transaction.service';
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
  constructor(private transactionService: TransactionService) {
    this.transactionService.getMany(this.getBuilder()).pipe().subscribe(value => console.log(value));
  }
  getBuilder(): RequestQueryBuilder {
    const builder = new RequestQueryBuilder();
    builder.sortBy({ field: 'createDate', order: 'DESC' });
    return builder;
  }
  ngOnInit(): void {
  }

}
