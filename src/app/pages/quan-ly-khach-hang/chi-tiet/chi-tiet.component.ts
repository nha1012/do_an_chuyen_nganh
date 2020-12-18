import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { environment } from 'environments/environment.prod';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.scss'],
})
export class ChiTietComponent implements OnInit {
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
        type: 'number',
      },
      price: {
        title: 'Giá sản phẩm',
        type: 'string',
      },
      qty: {
        title: 'Số lương',
        type: 'string',
      },
      tongTien: {
        title: 'Tổng tiền',
        type: 'string',
      },
    },
  };

  idKhachHang: number;
  thongTinKhachHang = {
    fullname: '',
    phone: '',
    address: '',
  };
  cacSanPhamDaMua = [];
  tongTienDaMua: number = 0;
  source: LocalDataSource = new LocalDataSource();
  constructor(
    private route: ActivatedRoute,
    private crudBaseService: CRUDBaseService,
    private toast: NbToastrService,
    ) {
    this.idKhachHang =  +this.route.snapshot.paramMap.get('id');
    // lay thong tin khach hang
    this.crudBaseService.get(`${environment.rest}/user/chi-tiet/${this.idKhachHang}`)
      .subscribe((v: {user: {}}) => {
      this.thongTinKhachHang = v.user[0]; });
    // lay san pham khach hang da mua
    this.crudBaseService.get(`${environment.rest}/order/san-pham-da-mua/${this.idKhachHang}`)
      .subscribe((v: {thongTinMuaHang: []}) => {
        v.thongTinMuaHang.forEach((value: any, key) => {
          value.tongTien = value.price * value.qty;
          this.tongTienDaMua += value.tongTien;
        });
        this.source.load(v.thongTinMuaHang);
        this.cacSanPhamDaMua = v.thongTinMuaHang;
      });
  }

  ngOnInit(): void {
  }
  checkCacSanPhamDaMua() {
    return this.cacSanPhamDaMua.length > 0;
  }
  prettier(tongTien: number) {
    return tongTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
