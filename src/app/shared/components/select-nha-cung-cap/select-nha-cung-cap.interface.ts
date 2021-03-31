import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { DanhMucSanPhamEntity } from 'app/shared/services/danh-muc-san-pham/danh-muc-san-pham.interface';
import { DanhMucSanPhamService } from 'app/shared/services/danh-muc-san-pham/danh-muc-san-pham.service';
import { NhaCungCapEntity } from 'app/shared/services/nha-cung-cap/nha-cung-cap.interface';
import { NhaCungCapService } from 'app/shared/services/nha-cung-cap/nha-cung-cap.service';

@Component({
  selector: 'ngx-select-nha-cung-cap',
  templateUrl: './select-nha-cung-cap.component.html',
  styleUrls: ['./select-nha-cung-cap.component.scss'],
})
export class SelectNhaCungCapComponent implements OnInit {
  @Input() value;
  @Input() size = 'small';

  @Output() selectedItem = new EventEmitter();

  lstNhaCungCap: NhaCungCapEntity[];
  constructor(private nhaCungCapService: NhaCungCapService) {
    this.nhaCungCapService.getMany()
      .subscribe(value => this.lstNhaCungCap = value);
  }

  ngOnInit(): void {
  }
  setSelectedItem(event: string | symbol) {
    this.selectedItem.emit(event);
  }
}
