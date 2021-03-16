import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CRUD_MESSAGES } from 'app/shared/messages/crud.messages';
import { HinhAnhSanPhamCloudinaryService } from 'app/shared/services/ha-san-pham/ha-san-pham-cloudinary.service';
import { HinhAnhSanPhamEntity } from 'app/shared/services/ha-san-pham/ha-san-pham.interface';
import { ProductEntity } from 'app/shared/services/product/product.interface';
import { ProductService } from 'app/shared/services/product/product.service';
import { InputFiles } from 'typescript';

@Component({
  selector: 'ngx-them-moi',
  templateUrl: './them-moi.component.html',
  styleUrls: ['./them-moi.component.scss'],
})
export class ThemMoiComponent implements OnInit {
  @ViewChild('myckeditor') ckeditor: any;
  loading: boolean = false;
  thongTinSanPham: ProductEntity = {};
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  formData = new FormData();
  addImageValue: any;
  isOpenThemHinhAnh = false;
  hinhAnhSanPham: HinhAnhSanPhamEntity = {};
  status: {
    loadingAddImage: false,
  };
  lstHinhAnhSanPhamMoi = [];
  files = [];
  constructor(
    private productService: ProductService,
    private toast: NbToastrService,
    private router: Router,
    private hinhAnhSanPhamCloudinaryService: HinhAnhSanPhamCloudinaryService,
  ) { }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
    };
  }
  checkVaild() {
    if (this.thongTinSanPham.tenSanPham === '')
      throw Error('Vui lòng nhập tên sản phẩm');
    if (this.thongTinSanPham.giaSanPham === 0)
      throw Error('Vui lòng nhập giá sản phẩm');
    if (this.thongTinSanPham.soLuong === 0)
      throw Error('Vui lòng nhập số lương sản phẩm');
    if (this.thongTinSanPham.danhMucSanPhamId === '')
      throw Error('Vui lòng chọn loại sản phẩm');
    if (this.thongTinSanPham.moTa === '')
      throw Error('Vui lòng nhập mô tả sản phẩm');
    return true;
  }
  onSaveSanPham() {
    try {
      if (this.checkVaild()) {
        this.loading = true;
        this.productService.create(this.thongTinSanPham)
          .subscribe(value => this.toast.success(CRUD_MESSAGES.SUCCESS_ADD));
      }
    } catch (error) {
      this.toast.success(CRUD_MESSAGES.FAIL_ADD);
    } finally {
      this.loading = false;
    }
  }
  uploadImage(files: FileList) {
    this.formData.append('file', files[0]);
  }
  selectedFile(e: HinhAnhSanPhamEntity) {
    if (e) {
      this.addImageValue = e;
    }
  }
  changeHinhAnhSanPham($event) {
    this.files = $event.target.files;
    const fileData = this.files[0];
    const formData = new FormData();
    formData.append('file', fileData);

    formData.append('upload_preset', 'angular_upload_file');
    formData.append('cloud_name', 'nha-nguyen');

    this.hinhAnhSanPhamCloudinaryService.upLoadFile(formData).subscribe(value => console.log(value));

  }
}
