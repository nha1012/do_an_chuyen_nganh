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
  source: LocalDataSource = new LocalDataSource();
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

  getBuilder(builder: RequestQueryBuilder) {
    builder.select(['username', 'role', 'address', 'email', 'displayName', 'phoneNumber', 'password', 'roleId']);
    builder.setJoin({ field: 'role', select: ['roleName'] });
    builder.setFilter({ field: 'roleId', operator: '$in', value: [RoleEnum.Admin, RoleEnum.Employee] });
  }
}
