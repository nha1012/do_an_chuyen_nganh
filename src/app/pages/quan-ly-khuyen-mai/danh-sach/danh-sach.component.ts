import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { environment } from 'environments/environment.prod';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from '../smart-table-datepicker/smart-table-datepicker.component';

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
      name: {
        title: 'Tên chương trình',
        type: 'string',
      },
      start_date: {
        title: 'Ngày bắt đầu',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        width: '250px',
        filter: false,
        sortDirection: 'desc',
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
      end_date: {
        title: 'Ngày kết thúc',
        type: 'custom',
        renderComponent: SmartTableDatepickerRenderComponent,
        width: '250px',
        filter: false,
        sortDirection: 'desc',
        editor: {
          type: 'custom',
          component: SmartTableDatepickerComponent,
        },
      },
    },
  };
  source: LocalDataSource = new LocalDataSource();
  loadDataTable() {
    this.crudBaseService
      .get(`${environment.rest}/khuyen-mai`)
      .subscribe((value: { khuyenMais: [] }) => {
        this.source.load(value.khuyenMais);
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
