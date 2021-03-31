import { ChuongTrinhKhuyenMaiEntity } from './../../../shared/services/chuong-trinh-khuyen-mai/chuong-trinh-khuyen-mai.interface';
import { ChuongTrinhKhuyenMaiService } from './../../../shared/services/chuong-trinh-khuyen-mai/chuong-trinh-khuyen-mai.service';
import { Component, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { DatatableAction, DatatableComponent, DatatableService } from 'ngn-datatable';
import { CRUD_MESSAGES } from 'app/shared/messages/crud.messages';
import { RequestQueryBuilder } from 'nest-crud-client';

@Component({
  selector: 'ngx-danh-sach',
  templateUrl: './danh-sach.component.html',
  styleUrls: ['./danh-sach.component.scss'],
})
export class DanhSachComponent {
  @ViewChild('table', { static: false })
  table: DatatableComponent<ChuongTrinhKhuyenMaiEntity>;
  chuongTrinhKhuyenMai: ChuongTrinhKhuyenMaiEntity = {};
  filterEntity: ChuongTrinhKhuyenMaiEntity = {
    chuongTrinhKhuyenMaiId: '',
  };
  tgKhuyenMai: any;
  datatableService: DatatableService<ChuongTrinhKhuyenMaiEntity> = {
    service: this.chuongTrinhKhuyenMaiService,
    primaryField: 'chuongTrinhKhuyenMaiId',
    builder: this.getBuilder.bind(this),
  };
  actions: DatatableAction<ChuongTrinhKhuyenMaiEntity>[] = [
    { name: 'quick-edit' },
    { name: 'delete' },
  ];
  constructor(
    private toast: NbToastrService,
    private chuongTrinhKhuyenMaiService: ChuongTrinhKhuyenMaiService,
  ) {
  }
  getBuilder(builder: RequestQueryBuilder) {
    if (this.tgKhuyenMai) {
      this.tgKhuyenMai &&
        (this.tgKhuyenMai as any).start &&
        builder.setFilter({
          field: 'startDate',
          operator: '$gte',
          value: ((this.tgKhuyenMai as any).start as Date).toJSON(),
        });
      this.tgKhuyenMai &&
        (this.tgKhuyenMai as any).end &&
        builder.setFilter({
          field: 'endDate',
          operator: '$lte',
          value: ((this.tgKhuyenMai as any).end as Date).toJSON(),
        });
    }
  }
  loadDataTable() {
    this.table.loadData();
  }
  isValid() {
    if (!this.chuongTrinhKhuyenMai.startDate) {
      throw new Error('Vui lòng chọn ngày bắt đầu');
    }
    if (!this.chuongTrinhKhuyenMai.endDate) {
      throw new Error('Vui lòng chọn ngày kết thúc');
    }
    if (!this.chuongTrinhKhuyenMai.tenChuongTrinh) {
      throw new Error('Vui lòng nhập tên chương trình');
    }
    return true;
  }
  async themCTKM() {
    try {
      this.isValid();
      await this.chuongTrinhKhuyenMaiService.create(this.chuongTrinhKhuyenMai).toPromise();
      this.toast.success(CRUD_MESSAGES.SUCCESS_ADD);
      this.loadDataTable();
    } catch (error) {
      this.toast.warning(error);
    }
  }
}
