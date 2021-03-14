import { Component, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import { UsersService } from 'app/shared/services/user/user.service';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { UserEntity } from 'app/shared/services/user/user.interface';
import { DatatableAction, DatatableComponent, DatatableService } from 'ngn-datatable';
import { RoleEnum } from 'app/shared/services/role/role.interface';

@Component({
  selector: 'ngx-quan-ly-tai-khoan',
  templateUrl: './quan-ly-tai-khoan.component.html',
  styleUrls: ['./quan-ly-tai-khoan.component.scss'],
})
export class QuanLyTaiKhoanComponent {
  @ViewChild('table', { static: false })
  table: DatatableComponent<UserEntity>;

  filterEntity: UserEntity = {
    userId: '',
    roleId: '',
  };
  datatableService: DatatableService<UserEntity> = {
    service: this.userService,
    primaryField: 'userId',
    builder: this.getBuilder.bind(this),
  };
  actions: DatatableAction<UserEntity>[] = [
    { name: 'quick-edit' },
    { name: 'delete' },
  ];
  constructor(
    private toast: NbToastrService,
    private userService: UsersService,
  ) {
  }
  loadDataTable() {
    this.table.loadData();
  }
  getNhanVien($event) {
    this.filterEntity.userId = $event;
  }
  getBuilder(builder: RequestQueryBuilder) {
    // tslint:disable-next-line:max-line-length
    builder.select(['userId', 'username', 'role', 'address', 'email', 'displayName', 'phoneNumber', 'password', 'roleId']);
    builder.setFilter({ field: 'roleId', operator: '$in', value: [RoleEnum.User] });
    this.filterEntity && this.filterEntity.userId &&
      builder.setFilter({ field: 'userId', operator: '$eq', value: this.filterEntity.userId });

  }
}
