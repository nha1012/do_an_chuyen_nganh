import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { DanhMucSanPhamEntity } from 'app/shared/services/danh-muc-san-pham/danh-muc-san-pham.interface';
import { DanhMucSanPhamService } from 'app/shared/services/danh-muc-san-pham/danh-muc-san-pham.service';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'ngx-select-loai-san-pham',
  templateUrl: './select-loai-san-pham.component.html',
  styleUrls: ['./select-loai-san-pham.component.scss'],
})
export class SelectLoaiSanPhamComponent implements OnInit {
  @Input() value: string;
  @Input() placerholder: string;
  @Input() fullWidth: boolean;
  @Input() size: string;
  @Output() selectedItem = new EventEmitter();

  lstLoaiSanPham: DanhMucSanPhamEntity[];
  constructor(private danhMucSanPham: DanhMucSanPhamService) {
    this.danhMucSanPham.getMany()
      .subscribe(value => this.lstLoaiSanPham = value);
  }

  ngOnInit(): void {
  }
  setSelectedItem(event: string | symbol) {
    this.selectedItem.emit(event);
  }
}
