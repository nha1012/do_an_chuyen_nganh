import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CRUD_MESSAGES } from 'app/shared/messages/crud.messages';
import { HinhAnhSanPhamCloudinaryService } from 'app/shared/services/ha-san-pham/ha-san-pham-cloudinary.service';
import { HinhAnhSanPhamEntity } from 'app/shared/services/ha-san-pham/ha-san-pham.interface';
import { HinhAnhSanPhamService } from 'app/shared/services/ha-san-pham/ha-san-pham.service';
import { ProductEntity } from 'app/shared/services/product/product.interface';
import { ProductService } from 'app/shared/services/product/product.service';
import { Observer } from 'rxjs';
import { InputFiles } from 'typescript';

@Component({
  selector: 'ngx-them-moi',
  templateUrl: './them-moi.component.html',
  styleUrls: ['./them-moi.component.scss'],
})
export class ThemMoiComponent implements OnInit {
  @ViewChild('myckeditor') ckeditor: any;
  loading: boolean = false;
  isUploadHinhAnh = false;
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
    private hinhAnhSanPhamSevice: HinhAnhSanPhamService,
  ) { }

  ngOnInit() {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      forcePasteAsPlainText: true,
    };
  }

  checkVaild() {
    if (!this.thongTinSanPham.tenSanPham)
      throw Error('Vui lòng nhập tên sản phẩm');
    if (!this.thongTinSanPham.giaSanPham)
      throw Error('Vui lòng nhập giá sản phẩm');
    if (!this.thongTinSanPham.soLuong)
      throw Error('Vui lòng nhập số lương sản phẩm');
    if (!this.thongTinSanPham.danhMucSanPhamId)
      throw Error('Vui lòng chọn loại sản phẩm');
    if (!this.thongTinSanPham.moTa)
      throw Error('Vui lòng nhập mô tả sản phẩm');
    if (this.files.length <= 0)
      throw Error('Vui lòng tải lên hình ảnh sản phẩm');
    return true;
  }
  onSaveSanPham() {
    try {
      if (this.checkVaild()) {
        this.loading = true;
        this.productService.create(this.thongTinSanPham)
          .subscribe(async value => {
            await this.onSaveHinhAnh(value.productId).then(done => {
              this.loading = false;
              this.toast.success(CRUD_MESSAGES.SUCCESS_ADD);
            });
          });
      }
    } catch (error) {
      this.toast.warning(error);
    } finally {
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
  async onSaveHinhAnh(productId: string) {
    try {
      this.isUploadHinhAnh = true;
      this.toast.info('Đang tải hình ảnh sản phẩm', 'Vui lòng chờ');

      this.files.forEach((value, index) => {
        const fileData = value;
        const formData = new FormData();
        formData.append('file', fileData);
        formData.append('upload_preset', 'angular_upload_file');
        formData.append('cloud_name', 'nha-nguyen');
        this.hinhAnhSanPhamCloudinaryService.upLoadFile(formData)
          .subscribe(async hinhAnh => {
            const hinhAnhUpload = await this.hinhAnhSanPhamSevice.create(
              { productId: productId, url: hinhAnh.url, alt: hinhAnh.original_filename })
              .toPromise();
            if (index === 0) {
              this.productService.put(productId, { anhMinhHoa: hinhAnh.url }).toPromise();
            }
            if (index === this.files.length - 1) {
              this.toast.info('Đã tải xong hình ảnh', 'Thông báo');
            }
          });
      });
    } catch (error) {
      this.isUploadHinhAnh = false;
      this.toast.danger(error);
    } finally {
      this.isUploadHinhAnh = false;
    }
  }
  onSelect(event) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
