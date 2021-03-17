import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductEntity } from 'app/shared/services/product/product.interface';
import { ProductService } from 'app/shared/services/product/product.service';
import { WorkshiftEntity } from 'app/shared/services/workshift/workshift.interface';
import { RequestQueryBuilder } from 'nest-crud-client';
import { DatatableComponent, DatatableService } from 'ngn-datatable';

@Component({
  selector: 'ngx-ban-hang',
  templateUrl: './ban-hang.component.html',
  styleUrls: ['./ban-hang.component.scss'],
})
export class BanHangComponent implements OnInit {
  lstCart = [];
  tgLamViec: any;
  @ViewChild('table', { static: false })
  table: DatatableComponent<ProductEntity>;

  @ViewChild('#cart', { static: false })
  cart: DatatableComponent<ProductEntity>;

  datatableService: DatatableService<ProductEntity> = {
    service: this.productService,
    primaryField: 'productId',
    builder: this.getBuilder.bind(this),
  };
  filterEntity: WorkshiftEntity = {
    workshift: undefined,
    userId: '',
  };
  constructor(
    private productService: ProductService,
    private router: Router,
    protected route: ActivatedRoute,
  ) {
  }
  ngOnInit(): void {
  }

  getBuilder(builder: RequestQueryBuilder) {
    builder.select(['anhMinhHoa', 'chuongTrinhKhuyenMai', 'danhMucSanPham', 'giaKhuyenMai', 'giaSanPham', 'moTa', 'soLuong', 'tenSanPham', 'nhaCungCap'] as Array<keyof ProductEntity>);
    // tslint:disable-next-line:max-line-length
    builder.setJoin({ field: 'danhMucSanPham' });
    builder.setJoin({ field: 'nhaCungCap' });
  }
  clickRowHandle($event) {
    if ($event.type === 'dblclick') {
      const { tenSanPham, giaKhuyenMai, soLuong, productId } = $event.row;
      const cartItem = {
        productId: productId,
        tenSanPham: tenSanPham,
        giaKhuyenMai: giaKhuyenMai,
        soLuong: 1,
        thanhTien: giaKhuyenMai * 1,
      };
      const condition = this.lstCart.find(product => product.productId === $event.row.productId);

      if (condition) {
        this.lstCart = this.lstCart.filter(product => product.productId !== condition.productId);

        const cart = {
          productId: condition.productId,
          tenSanPham: condition.tenSanPham,
          giaKhuyenMai: condition.giaKhuyenMai,
          soLuong: condition.soLuong + 1,
          thanhTien: condition.thanhTien + condition.giaKhuyenMai,
        };
        return this.lstCart.push(cart);
      }
      this.lstCart.push(cartItem);
    }
  }
}
