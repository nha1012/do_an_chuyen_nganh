import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductEntity } from 'app/shared/services/product/product.interface';
import { ProductService } from 'app/shared/services/product/product.service';
import { ReviewSanPhamEntity } from 'app/shared/services/review-san-pham/review-san-pham.interface';
import { UserEntity } from 'app/shared/services/user/user.interface';
import { RequestQueryBuilder } from 'nest-crud-client';

@Component({
  selector: 'ngx-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.scss'],
})
export class ChiTietComponent implements OnInit {
  maSanPham: string;
  product: ProductEntity;
  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.maSanPham = this.route.snapshot.paramMap.get('id');
    this.productService.getOne(this.maSanPham, this.getBuilder()).subscribe(value => this.product = value);
  }
  async luuThongTinSanPham() {
    try {
      await this.productService.put(this.product.productId, this.product).toPromise();
    } catch (error) {
    }
  }
  ngOnInit(): void {
  }
  getBuilder(): RequestQueryBuilder {
    const builder = new RequestQueryBuilder();
    builder.setJoin({ field: 'nhaCungCap' });
    builder.setJoin({ field: 'danhMucSanPham' });
    builder.setJoin({ field: 'hinhAnhSamPhams' });
    // tslint:disable-next-line:max-line-length
    builder.setJoin({ field: 'reviewSanPhams', select: ['danhGia', 'soSao', 'user', 'userId'] as Array<keyof ReviewSanPhamEntity> });
    builder.setJoin({ field: 'reviewSanPhams.user', select: ['displayName'] as Array<keyof UserEntity> });
    return builder;
  }

}
