import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NbToastContainer, NbToastrService } from '@nebular/theme';
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
    pager: {
      display: true,
      perPage: 7,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
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
      fullname: {
        title: 'Họ và tên',
        type: 'number',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      password: {
        title: 'Mật khẩu',
        type: 'string',
      },
      name: {
        title: 'Quyền',
        type: 'string',
      },
      phone: {
        title: 'Số điện thoại',
        type: 'string',
      },
      address: {
        title: 'Địa chỉ',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();
  loadDataTable() {
    this.crudBaseService.get(`${environment.rest}/user/employee`).subscribe(
      (value: { allUser: [] }) => {
        this.source.load(value.allUser);
      },
      (err) => {
        this.toast.danger(err.error.message);
      },
    );
  }
  constructor(
    private crudBaseService: CRUDBaseService,
    private toast: NbToastrService,
  ) {
    this.loadDataTable();
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this.crudBaseService
        .delete(`${environment.rest}/user/${event.data.id}`)
        .subscribe((values: { message: string }) => {
          if (values) {
            this.toast.success(values.message);
          }
        });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event) {
    this.crudBaseService
      .post(`${environment.rest}/user`, event.newData)
      .subscribe(
        (value: { message: string }) => {
          this.toast.success(value.message);
        },
        (err) => {
          this.toast.danger(err.message);
        },
        () => {
          this.loadDataTable();
        },
      );
  }
  onSaveConfirm(event) {
    this.crudBaseService
      .put(`${environment.rest}/user/${event.data.id}`, event.newData)
      .subscribe(
        (value: { message: string }) => {
          this.toast.success(value.message);
        },
        (err) => {
          this.toast.danger(err.message);
        },
        () => {
          this.loadDataTable();
        },
      );
  }
}
