import { Component, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { UsersService } from 'app/shared/services/user/user.service';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { UserEntity } from 'app/shared/services/user/user.interface';
import { DatatableAction, DatatableComponent, DatatableService } from 'ngn-datatable';
import { RoleEnum } from 'app/shared/services/role/role.interface';
import { NhaCungCapEntity } from 'app/shared/services/nha-cung-cap/nha-cung-cap.interface';
import { NhaCungCapService } from 'app/shared/services/nha-cung-cap/nha-cung-cap.service';
import { TranSactionEntity } from 'app/shared/services/transaction/transaction.interface';
import { TransactionService } from 'app/shared/services/transaction/transaction.service';

@Component({
  selector: 'ngx-quan-ly-tai-khoan',
  templateUrl: './danh-sach.component.html',
  styleUrls: ['./danh-sach.component.scss'],
})
export class DanhSachComponent {
  @ViewChild('table', { static: false })
  table: DatatableComponent<TranSactionEntity>;
  tgNhanDon: any;

  datatableService: DatatableService<TranSactionEntity> = {
    service: this.transactionService,
    primaryField: 'transactionId',
    builder: this.getBuilder.bind(this),
  };
  actions: DatatableAction<TranSactionEntity>[] = [
    { name: 'quick-edit' },
    { name: 'delete' },
  ];
  constructor(
    private toast: NbToastrService,
    private transactionService: TransactionService,
  ) {
  }
  loadDataTable() {
    this.table.loadData();
  }
  getBuilder(builder: RequestQueryBuilder) {
    // tslint:disable-next-line:max-line-length
    builder.select(['createDate', 'message', 'payment', 'user', 'tongTien', 'status', 'qty', 'orders'] as Array<keyof TranSactionEntity>);
    builder.setJoin({ field: 'orders' });
    builder.setJoin({ field: 'user' });
    this.tgNhanDon &&
      (this.tgNhanDon as any).start &&
      builder.setFilter({
        field: 'createDate',
        operator: '$gte',
        value: ((this.tgNhanDon as any).start as Date).toJSON(),
      });
    this.tgNhanDon &&
      (this.tgNhanDon as any).end &&
      builder.setFilter({
        field: 'createDate',
        operator: '$lte',
        value: ((this.tgNhanDon as any).end as Date).toJSON(),
      });
  }
  duyetDonHang($event) {
    // console.log($event);
  }
}
