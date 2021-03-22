import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { OrderEntity } from 'app/shared/services/order/order.interface';
import { OrderService } from 'app/shared/services/order/order.service';
import { ProductEntity } from 'app/shared/services/product/product.interface';
import { ProductService } from 'app/shared/services/product/product.service';
import { environment } from 'environments/environment.prod';
import { RequestQueryBuilder } from 'nest-crud-client';
import { LocalDataSource } from 'ng2-smart-table';
import { map, mergeMap } from 'rxjs/operators';
import { ThongKeSanPhamType } from './thong-ke-san-pham.type';
@Component({
  selector: 'ngx-thong-ke-san-pham',
  templateUrl: './thong-ke-san-pham.component.html',
  styleUrls: ['./thong-ke-san-pham.component.scss'],
})
export class ThongKeSanPhamComponent implements OnInit {
  products: ThongKeSanPhamType[] = [];
  ngOnInit(): void {
  }

  constructor(private productService: ProductService, orderService: OrderService) {
    this.productService.getMany(this.getBuidler()).subscribe((products) => {
      products.sort((pre, cur) => cur.orders.length - pre.orders.length);
      products.forEach(product => {
        const { orders } = product;
        let soLuong = 0;
        orders.forEach(value => {
          if (value.qty) {
            soLuong += value.qty;
          } else {
            soLuong = soLuong;
          }
        });
        const thongKeSanPham: ThongKeSanPhamType = {
          name: product.tenSanPham,
          value: soLuong,
        };
        this.products.push(thongKeSanPham);
      });
    });
  }
  getSanPham(): ThongKeSanPhamType[] {
    if (this.products.length >= 10) {
      return this.products.splice(9, this.products.length - 9);
    } else {
      return this.products;
    }
  }

  changeTypeTien(tien: number) {
    return tien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  getBuidler(): RequestQueryBuilder {
    const builder = new RequestQueryBuilder();
    builder.select(['tenSanPham', 'orders', 'soLuong'] as Array<keyof ProductEntity>);
    // tslint:disable-next-line:max-line-length
    builder.setJoin({ field: 'orders', select: ['productId', 'qty', 'tongTien', 'product'] as Array<keyof OrderEntity> });
    builder.setFilter({ field: 'status', operator: '$eq', value: true });
    return builder;
  }
}
