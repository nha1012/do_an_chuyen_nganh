import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { environment } from 'environments/environment.prod';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-quan-ly-tai-khoan',
  templateUrl: './quan-ly-tai-khoan.component.html',
  styleUrls: ['./quan-ly-tai-khoan.component.scss'],
})
export class QuanLyTaiKhoanComponent {
  settings = {
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
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      username: {
        title: 'Tên người dùng',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      password: {
        title: 'Mật khẩu',
        type: 'string',
        width: '200px',
      },
      phone: {
        title: 'Số điện thoại',
        type: 'string',
      },
      address: {
        title: 'Địa chỉ',
        width: '200px',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  constructor(private crudBaseService: CRUDBaseService) {
    // const data = this.service.getData();
    this.crudBaseService
      .get(`${environment.rest}/user`)
      .subscribe((value: { allUser: [] }) => {
        this.source.load(value.allUser);
      });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.crudBaseService
        .delete(`${environment.rest}/user/${event.data.id}`)
        .subscribe((values) => {
          console.log(values);
        });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
