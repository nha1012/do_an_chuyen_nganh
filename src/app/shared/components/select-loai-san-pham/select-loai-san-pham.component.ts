import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'ngx-select-loai-san-pham',
  templateUrl: './select-loai-san-pham.component.html',
  styleUrls: ['./select-loai-san-pham.component.scss'],
})
export class SelectLoaiSanPhamComponent implements OnInit {
  @Output() selectedItem = new EventEmitter();

  lstLoaiSanPham: [];
  constructor(private crudBaseService: CRUDBaseService) {
    this.crudBaseService.get(`${environment.rest}/product-type`)
      .subscribe((v: {allProductType: []} ) => this.lstLoaiSanPham = v.allProductType);
   }

  ngOnInit(): void {
  }
  setSelectedItem(event: string | symbol) {
    this.selectedItem.emit(event);
  }
}
