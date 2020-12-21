import { Component, OnInit, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'ngx-them-moi',
  templateUrl: './them-moi.component.html',
  styleUrls: ['./them-moi.component.scss'],
})
export class ThemMoiComponent implements OnInit {
  @ViewChild('myckeditor') ckeditor: any;
  loading: boolean = false;
  thongTinSanPham = {
    name: '',
    price: 0,
    amount: 0,
    type_id: 0,
    description: '',
  };
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  formData = new FormData();
  constructor(
    private crudBaseService: CRUDBaseService,
    private toast: NbToastrService,
  ) {}

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
    };
  }
  checkVaild() {
    if (this.thongTinSanPham.name === '')
      throw Error('Vui lòng nhập tên sản phẩm');
    if (this.thongTinSanPham.price === 0)
      throw Error('Vui lòng nhập giá sản phẩm');
    if (this.thongTinSanPham.amount === 0)
      throw Error('Vui lòng nhập số lương sản phẩm');
    if (this.thongTinSanPham.type_id === 0)
      throw Error('Vui lòng chọn loại sản phẩm');
    if (this.thongTinSanPham.description === '')
      throw Error('Vui lòng nhập mô tả sản phẩm');
    return true;
  }
  onSaveSanPham() {
    try {
      if (this.checkVaild()) {
        this.loading = true;
        this.crudBaseService
          .post(`${environment.rest}/product`, this.thongTinSanPham)
          .subscribe(
            (value: { data: any }) => {
              this.toast.success('Thêm mới thành công');
              this.formData.append('id', value.data.insertId);
              this.toast.success('Đang tải hình ảnh');

              this.crudBaseService
                .post(`${environment.rest}/image`, this.formData)
                .subscribe((v: { message: any }) => {
                  this.toast.success(v.message);
                  this.loading = false;
                });
            },
            (error) => {
              this.toast.danger(error);
            },
          );
      }
    } catch (error) {
      this.toast.danger(error);
    }
  }
  getSelectedItem(event: number) {
    this.thongTinSanPham.type_id = event;
  }
  uploadImage(files: FileList) {
    this.formData.append('file', files[0]);
  }
}
