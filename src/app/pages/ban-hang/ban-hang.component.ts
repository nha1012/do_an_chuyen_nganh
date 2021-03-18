import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogRef, NbDialogService, NbToastrService } from '@nebular/theme';
import { PhieuMuaHangDialogComponent } from 'app/shared/components/phieu-mua-hang-dialog/phieu-mua-hang-dialog.component';
import { OrderService } from 'app/shared/services/order/order.service';
import { ProductEntity } from 'app/shared/services/product/product.interface';
import { ProductService } from 'app/shared/services/product/product.service';
import { TranSactionEntity } from 'app/shared/services/transaction/transaction.interface';
import { TransactionService } from 'app/shared/services/transaction/transaction.service';
import { WorkshiftEntity } from 'app/shared/services/workshift/workshift.interface';
import { RequestQueryBuilder } from 'nest-crud-client';
import { DatatableComponent, DatatableService } from 'ngn-datatable';
import { CartItem } from './cart-item.interface';

@Component({
  selector: 'ngx-ban-hang',
  templateUrl: './ban-hang.component.html',
  styleUrls: ['./ban-hang.component.scss'],
})
export class BanHangComponent implements OnInit {
  lstCart: CartItem[] = [];
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
  productId: string;
  constructor(
    private productService: ProductService,
    protected route: ActivatedRoute,
    private toast: NbToastrService,
    private dialog: NbDialogService,
  ) {
  }
  ngOnInit(): void {
  }
  loc($event) {
    this.productId = $event;
    this.table.loadData();
  }
  getBuilder(builder: RequestQueryBuilder) {
    builder.select(['anhMinhHoa', 'chuongTrinhKhuyenMai', 'danhMucSanPham', 'giaKhuyenMai', 'giaSanPham', 'moTa', 'soLuong', 'tenSanPham', 'nhaCungCap', 'anhMinhHoa'] as Array<keyof ProductEntity>);
    builder.setJoin({ field: 'danhMucSanPham' });
    builder.setJoin({ field: 'nhaCungCap' });
    this.productId &&
      builder.setFilter({ field: 'productId', operator: '$eq', value: this.productId });
  }
  checkValid(): boolean {
    if (this.lstCart.length <= 0) {
      throw new Error('Vui lòng chọn sản phẩm');
    }
    return true;
  }
  banHang() {
    try {
      this.checkValid();
      this.dialog.open(PhieuMuaHangDialogComponent, { context: { lstCart: this.lstCart } }).onClose
        .subscribe(value => {
          if (value) {
            this.table.loadData();
            this.lstCart = [];
          }
        });
    } catch (error) {
      this.toast.danger(error);
    }
  }

  clickRowHandle($event) {
    if ($event.type === 'dblclick') {
      const { tenSanPham, giaKhuyenMai, soLuong, productId } = $event.row;
      const cartItem: CartItem = {
        productId: productId,
        tenSanPham: tenSanPham,
        giaKhuyenMai: giaKhuyenMai,
        soLuong: 1,
        thanhTien: giaKhuyenMai * 1,
        tongSoLuong: soLuong,
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
          tongSoLuong: soLuong,
        };
        return this.lstCart.push(cart);
      }
      this.lstCart.push(cartItem);
    }
  }
}
