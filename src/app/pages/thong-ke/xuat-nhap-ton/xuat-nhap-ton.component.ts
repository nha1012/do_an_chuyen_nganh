import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/shared/services/product/product.service';

@Component({
  selector: 'ngx-xuat-nhap-ton',
  templateUrl: './xuat-nhap-ton.component.html',
  styleUrls: ['./xuat-nhap-ton.component.scss'],
})
export class XuatNhapTonComponent implements OnInit {
  sanPhamTonKho = [];
  soTienTonKho = [];
  constructor(private productService: ProductService) {
    this.productService.getThongKeSPTonKho().subscribe((value: { datas: [] }) => this.sanPhamTonKho = value.datas);
    this.productService.getThongKeSTTonKho().subscribe((value: { datas: [] }) => this.soTienTonKho = value.datas);
  }
  ngOnInit(): void {
  }

}
