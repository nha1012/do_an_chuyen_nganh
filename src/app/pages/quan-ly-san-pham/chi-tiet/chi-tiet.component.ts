import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductEntity } from 'app/shared/services/product/product.interface';
import { ProductService } from 'app/shared/services/product/product.service';
import { RequestQueryBuilder } from 'nest-crud-client';

@Component({
  selector: 'ngx-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.scss'],
})
export class ChiTietComponent implements OnInit {
  maSanPham: string;
  product: ProductEntity;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.maSanPham = this.route.snapshot.paramMap.get('id');
    this.productService.getOne(this.maSanPham, this.getBuilder()).subscribe(value => this.product = value);
  }
  getBuilder(): RequestQueryBuilder {
    const builder = new RequestQueryBuilder();
    builder.setJoin({ field: 'nhaCungCap' });
    builder.setJoin({ field: 'danhMucSanPham' });
    builder.setJoin({ field: 'hinhAnhSamPhams' });

    return builder;
  }
}
