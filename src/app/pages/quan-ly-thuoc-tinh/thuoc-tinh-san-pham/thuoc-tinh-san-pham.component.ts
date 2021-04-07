import { Attribute, Component, OnInit, ViewChild } from '@angular/core';
import { AttributesEntity } from 'app/shared/services/atrributes/atrributes.interface';
import { AttributesService } from 'app/shared/services/atrributes/atrributes.service';
import { DatatableAction, DatatableComponent, DatatableService } from 'ngn-datatable';

@Component({
  selector: 'ngx-thuoc-tinh-san-pham',
  templateUrl: './thuoc-tinh-san-pham.component.html',
  styleUrls: ['./thuoc-tinh-san-pham.component.scss']
})
export class ThuocTinhSanPhamComponent implements OnInit {
  @ViewChild('table', { static: false })
  table: DatatableComponent<AttributesEntity>;
  tgNhanDon: any;

  thongTinThuocTinh:AttributesEntity={}
  isThemThuocTinhSanPham:boolean=false;
  themMoiThuocTinh(){
    this.isThemThuocTinhSanPham = true
    this.attributes.create(this.thongTinThuocTinh).subscribe(value=>{this.isThemThuocTinhSanPham =false
      this.table.loadData()
    }
    )

    
  }
  datatableService: DatatableService<AttributesEntity> = {
    service: this.attributes,
    primaryField: 'attributesId',
  };
  actions: DatatableAction<AttributesEntity>[] = [
    { name: 'quick-edit' },
    { name: 'delete' },
  ];
  constructor(private attributes: AttributesService) { }

  ngOnInit(): void {
  }

}
