import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  tgLamViec: any;
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
  locTenSanPham: string;
  locNhaCungCap: string;
  locCTKM: string;
  actions: DatatableAction<WorkshiftEntity>[] = [
    { name: 'quick-edit' },
    { name: 'delete' },
  ];
  constructor(
    private productService: ProductService,
    private router: Router,
    protected route: ActivatedRoute,
  ) {
  }
  ngOnInit(): void {

  }
  getProductId(event: string) {
    this.locTenSanPham = event;
  }
  getTenNhaCungCap(event: string) {
    console.log('called');
    this.locNhaCungCap = event;
  }
  getCTKM(event: string) {
    this.locCTKM = event;
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
  getBuilder(builder: RequestQueryBuilder) {
    builder.select(['anhMinhHoa', 'danhMucSanPham', 'giaKhuyenMai', 'giaSanPham', 'moTa', 'soLuong', 'tenSanPham', 'nhaCungCap', 'status', 'chuongTrinhKhuyenMaiValues', 'nhaCungCapId'] as Array<keyof ProductEntity>);
    builder.setFilter({ field: 'status', operator: '$eq', value: true });
    builder.setJoin({ field: 'danhMucSanPham' });
    builder.setJoin({ field: 'nhaCungCap' });
    builder.setJoin({ field: 'chuongTrinhKhuyenMaiValues' });

    this.locTenSanPham &&
      builder.setFilter({ field: 'productId', operator: '$eq', value: this.locTenSanPham });
    this.locNhaCungCap &&
      builder.setFilter({ field: 'nhaCungCap.nhaCungCapId', operator: '$eq', value: this.locNhaCungCap });
    this.locCTKM &&
      builder.setFilter({ field: 'chuongTrinhKhuyenMaiValues.chuongTrinhKhuyenMaiId', operator: '$eq', value: this.locCTKM });
  }
}
