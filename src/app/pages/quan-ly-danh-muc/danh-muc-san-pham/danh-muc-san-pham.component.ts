import { Component, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { DatatableAction, DatatableComponent, DatatableService } from 'ngn-datatable';
import { DanhMucSanPhamEntity } from 'app/shared/services/danh-muc-san-pham/danh-muc-san-pham.interface';
import { DanhMucSanPhamService } from 'app/shared/services/danh-muc-san-pham/danh-muc-san-pham.service';

@Component({
  selector: 'ngx-quan-ly-tai-khoan',
  templateUrl: './danh-muc-san-pham.component.html',
  styleUrls: ['./danh-muc-san-pham.component.scss'],
})
export class DanhMucSanPhamComponent {
  @ViewChild('table', { static: false })
  table: DatatableComponent<DanhMucSanPhamEntity>;
  thongTinDanhMuc: DanhMucSanPhamEntity = {
  };
  isThemDanhMucSanPham = false;
  datatableService: DatatableService<DanhMucSanPhamEntity> = {
    service: this.danhMucSanPhamService,
    primaryField: 'danhMucSanPhamId' };
  actions: DatatableAction<DanhMucSanPhamEntity>[] = [
    { name: 'quick-edit' },
    { name: 'delete' },
  ];
  constructor(
    private toast: NbToastrService,
    private danhMucSanPhamService: DanhMucSanPhamService,
  ) {
  }
  loadDataTable() {
    this.table.loadData();
  }
  valid() {
    if (!this.thongTinDanhMuc.tenDanhMuc) {
      throw new Error('Vui lòng nhập tên danh mục');
    }
    return true;
  }
  themMoiDanhMuc() {
    try {
      this.valid();
      this.isThemDanhMucSanPham = true;
      this.danhMucSanPhamService.create(this.thongTinDanhMuc).subscribe(value => {
        this.isThemDanhMucSanPham = false;

        this.toast.success('Thêm danh mục sản phẩm thành công');
      });
    } catch (error) {
      this.toast.danger(error);

    }
  }
}
