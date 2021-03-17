import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/shared/services/product/product.service';

@Component({
  selector: 'ngx-ban-hang',
  templateUrl: './ban-hang.component.html',
  styleUrls: ['./ban-hang.component.scss'],
})
export class BanHangComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
