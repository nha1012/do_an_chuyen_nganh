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

@Component({
  selector: 'ngx-quan-ly-tai-khoan',
  templateUrl: './danh-sach.component.html',
  styleUrls: ['./danh-sach.component.scss'],
})
export class DanhSachComponent {
  @ViewChild('table', { static: false })
  table: DatatableComponent<NhaCungCapEntity>;


  datatableService: DatatableService<NhaCungCapEntity> = {
    service: this.nhaCungCapService,
    primaryField: 'nhaCungCapId',
    builder: this.getBuilder.bind(this),
  };
  actions: DatatableAction<NhaCungCapEntity>[] = [
    { name: 'quick-edit' },
    { name: 'delete' },
  ];
  constructor(
    private toast: NbToastrService,
    private nhaCungCapService: NhaCungCapService,
  ) {
  }
  loadDataTable() {
    this.table.loadData();
  }
  getBuilder(builder: RequestQueryBuilder) {
    // tslint:disable-next-line:max-line-length
    builder.select(['tenNhaCungCap', 'url', 'phoneNumber', 'address']);
  }
}
