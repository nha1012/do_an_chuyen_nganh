import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { environment } from 'environments/environment.prod';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-thong-ke-san-pham',
  templateUrl: './thong-ke-san-pham.component.html',
  styleUrls: ['./thong-ke-san-pham.component.scss'],
})
export class ThongKeSanPhamComponent implements OnInit {

  settings = {
    pager: {
      display: true,
      perPage: 7,
    },
    actions: {
      delete: false,
      add: false,
      edit: false,
  },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
    },
    columns: {
      name: {
        title: 'Tên sản phẩm',
        type: 'string', editable: false,
        addable: false,
        deleteable: false,
      },
      price: {
        title: 'Giá',
        type: 'string', editable: false,
        addable: false,
        deleteable: false,
      },
      soLuongDaBan: {
        title: 'Sản phẩm đã bán',
        type: 'number',
      },
      amount: {
        title: 'Số lượng còn lại',
        type: 'string',
        editable: false,
        addable: false,
        deleteable: false,
      },
      tongTienDaBan: {
        title: 'Số tiền đã bán',
        type: 'string', editable: false,
        addable: false,
        deleteable: false,
      },
      tongTien: {
        title: 'Số tiền tồn kho',
        type: 'string', editable: false,
        addable: false,
        deleteable: false,
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  loadDataTable() {
    this.crudBaseService
      .get(`${environment.rest}/product/thong-ke-san-pham`)
      .subscribe((value: { allProduct: [] }) => {
        // tslint:disable-next-line:max-line-length
        value.allProduct.forEach((allProduct: {tongTien: number, amount: number, price: number, soLuongDaBan: number, tongTienDaBan: number }) => {
          allProduct.tongTien = allProduct.amount * allProduct.price;
          if (allProduct.soLuongDaBan === null) {
            allProduct.soLuongDaBan = 0;
            allProduct.tongTienDaBan = 0;
          }
        });
        this.source.load(value.allProduct);
      });
  }
  constructor(
    private crudBaseService: CRUDBaseService,
  ) {
    this.loadDataTable();
  }

  ngOnInit(): void {
  }
  prettier(tongTien: number) {
    return tongTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
