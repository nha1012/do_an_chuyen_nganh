import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

export enum HandleCongTruEnum {
  CONG = 'CONG',
  TRU = 'TRU',
  XOA = 'XOA',
}
@Component({
  selector: 'ngx-cell-so-luong-san-pham',
  templateUrl: './cell-so-luong-san-pham.component.html',
  styleUrls: ['./cell-so-luong-san-pham.component.scss'],
})
export class CellSoLuongSanPhamComponent implements OnInit {
  @Input() soLuong: number;
  @Input() tongSoLuong: number;
  @Output() handerActionSanPham = new EventEmitter<HandleCongTruEnum>();
  HandleCongTruEnum = HandleCongTruEnum;
  constructor(private toast: NbToastrService) { }
  clickHandle(event: HandleCongTruEnum) {
    if (event === HandleCongTruEnum.CONG) {
      this.handerActionSanPham.emit(HandleCongTruEnum.CONG);
      if (this.soLuong>=this.tongSoLuong) {
        this.toast.warning('Không đủ số lượng','Thông báo');
        return;
      }
      return this.soLuong++;
    }
    if (this.soLuong === 1) {
      if (confirm('Bạn có muốn xoá sản phẩm')) {
        return this.handerActionSanPham.emit(HandleCongTruEnum.XOA);
      }
    return this.soLuong      
    }
    this.handerActionSanPham.emit(HandleCongTruEnum.TRU);
    return this.soLuong--;
  }

  ngOnInit(): void {
  }

}
