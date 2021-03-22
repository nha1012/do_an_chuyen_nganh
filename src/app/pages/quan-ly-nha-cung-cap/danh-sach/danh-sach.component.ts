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
import { CRUD_MESSAGES } from 'app/shared/messages/crud.messages';

@Component({
  selector: 'ngx-quan-ly-tai-khoan',
  templateUrl: './danh-sach.component.html',
  styleUrls: ['./danh-sach.component.scss'],
})
export class DanhSachComponent {
  @ViewChild('table', { static: false })
  table: DatatableComponent<NhaCungCapEntity>;
  isThemNhaCungCap = false;
  thongTinNhaCungCap: NhaCungCapEntity = {};
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
  checkVaid() {
    if (!this.thongTinNhaCungCap.tenNhaCungCap) {
      throw new Error('Vui lòng nhập tên nhà cung cấp');
    }
    if (!this.thongTinNhaCungCap.url) {
      throw new Error('Vui lòng nhập đường nhà cung cấp');
    }
    if (!this.thongTinNhaCungCap.phoneNumber) {
      throw new Error('Vui lòng nhập sđt nhà cung cấp');
    }
    if (!this.thongTinNhaCungCap.address) {
      throw new Error('Vui lòng nhập địa chỉ nhà cung cấp');
    }
    return true;
  }
  themNhaCungCap() {
    try {
      this.checkVaid();
      this.isThemNhaCungCap = true;
      this.nhaCungCapService.create(this.thongTinNhaCungCap).subscribe(value => {
        this.isThemNhaCungCap = false;
        this.loadDataTable();
        this.toast.success(CRUD_MESSAGES.SUCCESS_ADD);
      });
    } catch (error) {
      this.isThemNhaCungCap = false;
      this.toast.danger(error);
    }
  }
}
