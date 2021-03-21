import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ProductEntity } from 'app/shared/services/product/product.interface';
import { ProductService } from 'app/shared/services/product/product.service';
import { WorkshiftEntity } from 'app/shared/services/workshift/workshift.interface';
import { RequestQueryBuilder } from 'nest-crud-client';
import { DatatableAction, DatatableComponent, DatatableService } from 'ngn-datatable';

@Component({
  selector: 'ngx-danh-sach',
  templateUrl: './danh-sach.component.html',
  styleUrls: ['./danh-sach.component.scss'],
})
export class DanhSachComponent implements OnInit {
  tgNhapKho: any;
  @ViewChild('table', { static: false })
  table: DatatableComponent<ProductEntity>;
  datatableService: DatatableService<ProductEntity> = {
    service: this.productService,
    primaryField: 'productId',
    builder: this.getBuilder.bind(this),
  };
  filterEntity: WorkshiftEntity = {
    workshift: undefined,
    userId: '',
  };
  actions: DatatableAction<WorkshiftEntity>[] = [
    { name: 'quick-edit' },
    { name: 'delete' },
  ];
  constructor(
    private productService: ProductService,
    private router: Router,
    protected route: ActivatedRoute,
    private toast: NbToastrService,
  ) {
  }
  ngOnInit(): void {

  }
  loadDataTable() {
    this.table.loadData();
  }
  clickRowHandle($event: any) {
    if ($event.type === 'dblclick') {
      const id = ($event.row as ProductEntity).productId;
      this.router.navigate([`/pages/quan-ly-san-pham/chi-tiet/${id}`]);
    }
  }
  async duyetSanPham($event) {
    try {
      await this.productService.put($event.productId, { status: !$event.status }).toPromise();
      this.toast.success('Đã duyệt sản phẩm');
      this.table.loadData();
    } catch (error) {
      this.toast.danger(error);

    }
  }
  getBuilder(builder: RequestQueryBuilder) {
    builder.select(['anhMinhHoa', 'chuongTrinhKhuyenMai', 'danhMucSanPham', 'giaKhuyenMai', 'giaSanPham', 'soLuong', 'tenSanPham', 'nhaCungCap', 'status'] as Array<keyof ProductEntity>);
    // tslint:disable-next-line:max-line-length
    builder.setJoin({ field: 'danhMucSanPham' });
    builder.setJoin({ field: 'nhaCungCap' });
    this.tgNhapKho &&
      (this.tgNhapKho as any).start &&
      builder.setFilter({
        field: 'createDate',
        operator: '$gte',
        value: ((this.tgNhapKho as any).start as Date).toJSON(),
      });
    this.tgNhapKho &&
      (this.tgNhapKho as any).end &&
      builder.setFilter({
        field: 'createDate',
        operator: '$lte',
        value: ((this.tgNhapKho as any).end as Date).toJSON(),
      });
  }
}
