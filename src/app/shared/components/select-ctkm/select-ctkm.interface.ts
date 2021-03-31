import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChuongTrinhKhuyenMaiEntity } from 'app/shared/services/chuong-trinh-khuyen-mai/chuong-trinh-khuyen-mai.interface';
import { ChuongTrinhKhuyenMaiService } from 'app/shared/services/chuong-trinh-khuyen-mai/chuong-trinh-khuyen-mai.service';

@Component({
  selector: 'ngx-select-thuoc-tinh',
  templateUrl: './select-ctkm.component.html',
  styleUrls: ['./select-ctkm.component.scss'],
})
export class SelectCTKMComponent implements OnInit {
  @Input() value: string;
  @Input() disabled = false;
  @Output() selectedItem = new EventEmitter();

  lstCTKM: ChuongTrinhKhuyenMaiEntity[];
  constructor(private ctkmService: ChuongTrinhKhuyenMaiService) {
    this.ctkmService.getMany()
      .subscribe(value => this.lstCTKM = value);
  }

  ngOnInit(): void {
  }
  setSelectedItem(event: string | symbol) {
    this.selectedItem.emit(event);
  }
}
