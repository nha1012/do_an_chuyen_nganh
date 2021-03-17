import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { TypeEvent } from 'app/pages/dang-ky-ca-lam/type-event.interface';
import { CRUD_MESSAGES } from 'app/shared/messages/crud.messages';
import { getUserId } from 'app/shared/services/app.service';
import { CaLamEnum, WorkshiftEntity } from 'app/shared/services/workshift/workshift.interface';
import { WorkshiftService } from 'app/shared/services/workshift/workshift.service';

@Component({
  selector: 'ngx-dang-ky-ca-lam-dialog',
  templateUrl: './dang-ky-ca-lam-dialog.component.html',
  styleUrls: ['./dang-ky-ca-lam-dialog.component.scss'],
})
export class DangKyCaLamDialogComponent implements OnInit {
  CaLamEnum = CaLamEnum;
  caLamSelected: CaLamEnum;
  date: Date;
  data: any;
  isDangKy = false;
  constructor(
    private workshiftService: WorkshiftService,
    private toast: NbToastrService,
    protected ref: NbDialogRef<DangKyCaLamDialogComponent>) { }
  ngOnInit(): void {
  }
  handleHuy() {
    this.ref.close();

  }
  checkValid() {
    if (!this.caLamSelected) {
      throw new Error('Vui lòng chọn ca làm');
    }
    return true;
  }
  handleXacNhan() {
    try {
      // cộng thêm 1 ngày rồi mới push, không biết lỗi ngày của hệ thông
      // hay sao mà cứ đẩy lên server là bị giảm lui 1 ngày
      this.date.setDate(this.date.getDate() + 1);
      if (this.checkValid()) {
        this.isDangKy = true;
        const workshift: WorkshiftEntity = {
          date: this.date,
          userId: getUserId(),
          workshift: this.caLamSelected,
        };
        this.workshiftService.create(workshift).subscribe(value => {
          this.toast.success(CRUD_MESSAGES.SUCCESS_DKCL);
          this.isDangKy = false;
          const event: TypeEvent = {
            title: value.workshift,
            date: value.date,
          };
          this.ref.close(event);
        });
      }
    } catch (error) {
      this.toast.warning(error);
    }
  }
}
