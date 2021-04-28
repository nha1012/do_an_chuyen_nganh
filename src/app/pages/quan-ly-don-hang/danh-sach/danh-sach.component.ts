
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { DatatableAction, DatatableComponent, DatatableService } from 'ngn-datatable';
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
    private router: Router,
  ) {
  }
  loadDataTable() {
    this.table.loadData();
  }
  clickRowHandle($event: any){
    if($event.type === 'dblclick'){
      const id = ($event.row as TranSactionEntity).transactionId;
      this.router.navigate([`/pages/quan-ly-don-hang/chi-tiet-don-hang/${id}`]);
    }
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
  async duyetDonHang(transactionCurrent: TranSactionEntity) {
    const status = !transactionCurrent.status;
    try {
      await this.transactionService.put(transactionCurrent.transactionId,{ status: status}).toPromise();
      this.toast.success('Cập nhật thành công', 'Thông báo');
      this.table.loadData();
    } catch (error) {
      this.toast.danger(error.message);
    }
  }
}
