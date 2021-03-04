import { Component, Input, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { info } from 'console';
import { environment } from 'environments/environment.prod';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-diem-danh',
  templateUrl: './diem-danh.component.html',
  styleUrls: ['./diem-danh.component.scss'],
})
export class DiemDanhComponent implements OnInit, ViewCell {
  @Input() value: number;
  @Input() rowData: any;

  constructor(
    private crudBaseService: CRUDBaseService,
    private toast: NbToastrService,
  ) {}

  ngOnInit(): void {}
  onCheckedChange() {
    if (this.value === 0) {
      this.value = 1;
    } else {
      this.value = 0;
    }

    this.crudBaseService
      .path(`${environment.rest}/work-shift/${this.rowData.id}`, {
        status: this.value,
      })
      .subscribe((messages: { message: string }) =>
        this.toast.success(messages.message),
      );
  }
  checkChecked() {
    if (this.value === 1) {
      return true;
    }
    return false;
  }
  checkDiable() {
    const date = new Date(this.rowData.date);
    const dateNow = new Date();
    if (date >= dateNow) {
      return true;
    }
    return false;
  }
  getStatus() {
    const date = new Date(this.rowData.date);
    const dateNow = new Date();
    if (date >= dateNow && this.value === 0) {
      return 'danger';
    }
    return 'info';
  }
}
