import { Component, Input, OnInit, Output } from '@angular/core';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { environment } from 'environments/environment.prod';
import { EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-select-loai-san-pham',
  templateUrl: './select-loai-san-pham.component.html',
  styleUrls: ['./select-loai-san-pham.component.scss'],
})
export class SelectLoaiSanPhamComponent implements OnInit, ViewCell {
  @Input() rowData: any;
  @Output() save: EventEmitter<any> = new EventEmitter();
  lstTypeProduct = [];
  value: string | number;
  constructor(private crudBaseService: CRUDBaseService) {
  }

  ngOnInit() {
    this.crudBaseService.get(`${environment.rest}/product-type`)
    .subscribe((v: {allProductType: []}) => {
      this.lstTypeProduct = v.allProductType; });
  }
  onChangeHandle(event: string | symbol) {
    this.save.emit(event);
  }
}
