import { Component, OnInit } from '@angular/core';
import { ChuongTrinhKhuyenMaiService } from 'app/shared/services/chuong-trinh-khuyen-mai/chuong-trinh-khuyen-mai.service';

@Component({
  selector: 'ngx-chuong-trinh-khuyen-mai',
  templateUrl: './chuong-trinh-khuyen-mai.component.html',
  styleUrls: ['./chuong-trinh-khuyen-mai.component.scss'],
})
export class ChuongTrinhKhuyenMaiComponent implements OnInit {
  chuongTrinhKhuyenMaiId: string;
  baoCaoCTKM = [];
  constructor(private chuongTrinhKhuyenMaiService: ChuongTrinhKhuyenMaiService) { }

  ngOnInit(): void {
  }

  xemThongKe() {
    this.chuongTrinhKhuyenMaiService.getThongKe({ chuongTrinhKhuyenMaiId: this.chuongTrinhKhuyenMaiId })
      .subscribe((value: []) => this.baoCaoCTKM = value);
  }

}
