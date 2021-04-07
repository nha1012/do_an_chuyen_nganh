
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductEntity } from 'app/shared/services/product/product.interface';
import { ProductService } from 'app/shared/services/product/product.service';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
@Component({
  selector: 'ngx-select-ten-san-pham',
  templateUrl: './select-ten-san-pham.component.html',
  styleUrls: ['./select-ten-san-pham.component.scss'],
})
export class SelectTenSanPhamComponent implements OnInit {
  @Output() productSelected = new EventEmitter<string>();
  @Input() size: string = 'medium';
  products: ProductEntity[];
  constructor(private productService: ProductService) {
    this.productService
      .getMany(this.getBuilder())
      .subscribe(value => this.products = value);
  }
  ngOnInit(): void {

  }
  getBuilder() {
    const builder = new RequestQueryBuilder();
    builder.select(['tenSanPham'] as Array<keyof ProductEntity>);
    builder.sortBy({field:'tenSanPham', order: 'ASC'})
    return builder;
  }
}
