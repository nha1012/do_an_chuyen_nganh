import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { environment } from 'environments/environment.prod';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-quan-ly-kho',
  templateUrl: './quan-ly-kho.component.html',
  styleUrls: ['./quan-ly-kho.component.scss'],
})
export class QuanLyKhoComponent implements OnInit {

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
      id: {
        title: 'ID',
        type: 'number',
        editable: false,
        addable: false,
        deleteable: false,
      },
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
      amount: {
        title: 'Số lượng',
        type: 'string', editable: false,
        addable: false,
        deleteable: false,
      },
      product_type: {
        title: 'Loại sản phẩm',
        type: 'string',
        editable: false,
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
  tongTienTonKho: number = 0;
  loadDataTable() {
    this.crudBaseService
      .get(`${environment.rest}/product/get-san-pham-trong-kho`)
      .subscribe((value: { products: [] }) => {
        value.products.forEach((product: {tongTien: number, amount: number, price: number }, key) => {
          product.tongTien = product.amount * product.price;
          this.tongTienTonKho = this.tongTienTonKho + product.tongTien;
        });
        this.source.load(value.products);
      });
  }
  constructor(
    private crudBaseService: CRUDBaseService,
    private toast: NbToastrService,
  ) {
    this.loadDataTable();
  }

  ngOnInit(): void {
  }
  prettier(tongTien: number) {
    return tongTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
