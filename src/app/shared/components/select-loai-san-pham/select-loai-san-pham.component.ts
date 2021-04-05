import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { DanhMucSanPhamEntity } from 'app/shared/services/danh-muc-san-pham/danh-muc-san-pham.interface';
import { DanhMucSanPhamService } from 'app/shared/services/danh-muc-san-pham/danh-muc-san-pham.service';
import { environment } from 'environments/environment.prod';
import { RequestQueryBuilder } from 'nest-crud-client';

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
    this.danhMucSanPham.getMany(this.getBuilder())
      .subscribe(value => this.lstLoaiSanPham = value);
  }

  ngOnInit(): void {
  }
  getBuilder () {
    const builder = new RequestQueryBuilder();
    builder.sortBy({field:"tenSanPham", order: 'ASC'})
    return builder;
  }
  setSelectedItem(event: string | symbol) {
    this.selectedItem.emit(event);
  }
}
