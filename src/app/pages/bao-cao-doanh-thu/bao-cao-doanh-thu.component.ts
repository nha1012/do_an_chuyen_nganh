import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { OrderService } from 'app/shared/services/order/order.service';

@Component({
  selector: 'ngx-bao-cao-doanh-thu',
  templateUrl: './bao-cao-doanh-thu.component.html',
  styleUrls: ['./bao-cao-doanh-thu.component.scss'],
})
export class BaoCaoDoanhThuComponent implements OnInit {
  thongKeTheoNhaCungCap = [];
  thongKeTheoNgay = [];
  tgMuaHang: any;
  constructor(private orderService: OrderService, private toast: NbToastrService) {
    this.orderService.getBaoCaoTheoNhaCungCap()
      .subscribe((value: { datas: [] }) => this.thongKeTheoNhaCungCap = value.datas);
  }

  ngOnInit(): void {
  }
  baoCao() {
    if (this.tgMuaHang) {
      const startDate: Date = (this.tgMuaHang as any).start;
      const endDate: Date = (this.tgMuaHang as any).end;
      this.orderService.getBaoCaoTheoNgay({
        startDate, endDate,
      }).subscribe((value: { datas: [] }) => this.thongKeTheoNgay = value.datas);
    } else {
      this.toast.warning('Vui lòng chọn thời gian');
    }
  }
}
