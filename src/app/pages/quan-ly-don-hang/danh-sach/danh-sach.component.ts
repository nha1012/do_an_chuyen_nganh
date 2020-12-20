import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { environment } from 'environments/environment.prod';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-danh-sach',
  templateUrl: './danh-sach.component.html',
  styleUrls: ['./danh-sach.component.scss'],
})
export class DanhSachComponent {
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
      user_name: {
        title: 'Tên sản phẩm',
        type: 'string',
      },
      user_email: {
        title: 'Email',
        type: 'string',
      },
      user_id: {
        title: 'ID khách hàng',
        type: 'string',
      },
      user_phone: {
        title: 'Số điện thoại',
        type: 'string',
      },
      amount: {
        title: 'Số tiền phải trả',
        type: 'string',
      },
      status: {
        title: 'Trạng thái',
        type: 'number',
      },
      message: {
        title: 'Ghi chú',
        type: 'number',
      },
      payment_info: {
        title: 'Phương thức thanh toán',
        type: 'string',
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  loadDataTable() {
    this.crudBaseService
      .get(`${environment.rest}/transaction`)
      .subscribe((value: { allTransaction: [] }) => {
        this.source.load(value.allTransaction);
      });
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
        .delete(`${environment.rest}/transaction/${event.data.id}`)
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
  onCreateConfirm(event: { newData: { product_type: any; }; }) {
    delete event.newData.product_type;
    this.crudBaseService
      .post(`${environment.rest}/product`, event.newData)
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
  onSaveConfirm(event: { newData: { product_type: any; }; data: { id: any; }; }) {
    delete event.newData.product_type;
    this.crudBaseService
      .put(`${environment.rest}/product/${event.data.id}`, event.newData)
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
