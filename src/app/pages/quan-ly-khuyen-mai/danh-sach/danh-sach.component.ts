import { ChuongTrinhKhuyenMaiEntity } from './../../../shared/services/chuong-trinh-khuyen-mai/chuong-trinh-khuyen-mai.interface';
import { ChuongTrinhKhuyenMaiService } from './../../../shared/services/chuong-trinh-khuyen-mai/chuong-trinh-khuyen-mai.service';
import { Component, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { DatatableAction, DatatableComponent, DatatableService } from 'ngn-datatable';

@Component({
  selector: 'ngx-danh-sach',
  templateUrl: './danh-sach.component.html',
  styleUrls: ['./danh-sach.component.scss'],
})
export class DanhSachComponent {
  @ViewChild('table', { static: false })
  table: DatatableComponent<ChuongTrinhKhuyenMaiEntity>;

  filterEntity: ChuongTrinhKhuyenMaiEntity = {
    chuongTrinhKhuyenMaiId: '',
  };
  datatableService: DatatableService<ChuongTrinhKhuyenMaiEntity> = {
    service: this.chuongTrinhKhuyenMaiService,
    primaryField: 'chuongTrinhKhuyenMaiId',
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
  loadDataTable() {
    this.table.loadData();
  }
}
