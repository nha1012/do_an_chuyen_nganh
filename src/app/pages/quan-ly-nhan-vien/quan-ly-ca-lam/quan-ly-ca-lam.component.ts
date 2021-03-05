import { Component, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { UserEntity } from 'app/shared/services/user/user.interface';
import { WorkshiftEntity } from 'app/shared/services/workshift/workshift.interface';
import { WorkshiftService } from 'app/shared/services/workshift/workshift.service';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { DatatableAction, DatatableComponent, DatatableService } from 'ngn-datatable';

@Component({
  selector: 'ngx-quan-ly-ca-lam',
  templateUrl: './quan-ly-ca-lam.component.html',
  styleUrls: ['./quan-ly-ca-lam.component.scss'],
})
export class QuanLyCaLamComponent {
  tgLamViec: any;
  @ViewChild('table', { static: false })
  table: DatatableComponent<WorkshiftEntity>;
  datatableService: DatatableService<WorkshiftEntity> = {
    service: this.workshiftService,
    primaryField: 'workshiftId',
    builder: this.getBuilder.bind(this),
  };
  filterEntity: WorkshiftEntity = {
    workshift: undefined,
    userId: '',
  };
  actions: DatatableAction<WorkshiftEntity>[] = [
    { name: 'quick-edit' },
    { name: 'delete' },
    {
      name: 'diem danh',
      tooltip: 'Điểm danh nhân viên',
      icon: '<i class="far fa-check-circle text-success"></i>',
      click: (e) => this.diemDanh(e),
    },
  ];
  constructor(
    private toast: NbToastrService,
    private workshiftService: WorkshiftService,
  ) {
  }
  loadDataTable() {
    this.table.loadData();
  }
  async diemDanh(workshiftCurrent: WorkshiftEntity) {
    if (confirm('Xác nhận điểm danh nhân viên')) {
      try {
        await this.workshiftService.put(workshiftCurrent.workshiftId, { status: true }).toPromise();
        this.toast.success('Điểm danh thành công', 'Thông báo');
        this.table.loadData();
      } catch (error) {
        this.toast.danger(error.message);
      }
    }
  }
  getBuilder(builder: RequestQueryBuilder) {
    builder.select(['date', 'workshift', 'user', 'status'] as Array<keyof WorkshiftEntity>);
    // tslint:disable-next-line:max-line-length
    builder.setJoin({ field: 'user', select: ['username', 'displayName', 'phoneNumber', 'address'] as Array<keyof UserEntity> });
    this.tgLamViec &&
      (this.tgLamViec as any).start &&
      builder.setFilter({
        field: 'date',
        operator: '$gte',
        value: ((this.tgLamViec as any).start as Date).toJSON(),
      });
    this.tgLamViec &&
      (this.tgLamViec as any).end &&
      builder.setFilter({
        field: 'date',
        operator: '$lte',
        value: ((this.tgLamViec as any).end as Date).toJSON(),
      });
    this.filterEntity && this.filterEntity.workshift &&
      builder.setFilter({ field: 'workshift', operator: '$eq', value: this.filterEntity.workshift });
    this.filterEntity && this.filterEntity.userId &&
      builder.setFilter({ field: 'userId', operator: '$eq', value: this.filterEntity.userId });

  }
}
