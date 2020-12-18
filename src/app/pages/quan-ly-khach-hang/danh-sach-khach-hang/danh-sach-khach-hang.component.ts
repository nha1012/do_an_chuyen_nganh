import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { environment } from 'environments/environment.prod';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-danh-sach-khach-hang',
  templateUrl: './danh-sach-khach-hang.component.html',
  styleUrls: ['./danh-sach-khach-hang.component.scss'],
})
export class DanhSachKhachHangComponent {

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
      },
      fullname: {
        title: 'Họ và tên',
        type: 'number',
      },
      email: {
        title: 'E-mail',
        type: 'string',
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
  loadDataTable() {
    this.crudBaseService.get(`${environment.rest}/user/customers`).subscribe(
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
    private router: Router,
    private route: ActivatedRoute,

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
    delete event.newData.id;
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
    delete event.newData.role_id;
    delete event.newData.user_id;
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
  lastClickTime: number = 0;

  onUserRowSelect(event: { data: { id: any; }; }) {
    if (this.lastClickTime === 0) {
      this.lastClickTime = new Date().getTime();
    } else {
      const change = (new Date().getTime()) - this.lastClickTime;
      if (change < 400) {
        const id = event.data.id;
      this.router.navigate([`../../../chi-tiet/${id}`], { relativeTo: this.route });
      }
      this.lastClickTime = 0;
    }
  }

}
