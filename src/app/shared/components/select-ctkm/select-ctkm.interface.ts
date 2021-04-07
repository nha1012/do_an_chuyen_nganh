import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChuongTrinhKhuyenMaiEntity } from 'app/shared/services/chuong-trinh-khuyen-mai/chuong-trinh-khuyen-mai.interface';
import { ChuongTrinhKhuyenMaiService } from 'app/shared/services/chuong-trinh-khuyen-mai/chuong-trinh-khuyen-mai.service';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';

@Component({
  selector: 'ngx-select-ctkm',
  templateUrl: './select-ctkm.component.html',
  styleUrls: ['./select-ctkm.component.scss'],
})
export class SelectCTKMComponent implements OnInit {
  @Input() value: string;
  @Input() disabled = false;
  @Output() selectedItem = new EventEmitter();

  lstCTKM: ChuongTrinhKhuyenMaiEntity[];
  constructor(private ctkmService: ChuongTrinhKhuyenMaiService) {
    this.ctkmService.getMany(this.getBuilder())
      .subscribe(value => this.lstCTKM = value);
  }

  ngOnInit(): void {
  }
  getBuilder(): RequestQueryBuilder {
    const builder = new RequestQueryBuilder();
    builder.sortBy({field:"tenChuongTrinh", order: 'ASC'})
    return builder;
  }
  setSelectedItem(event: string | symbol) {
    this.selectedItem.emit(event);
  }
}
