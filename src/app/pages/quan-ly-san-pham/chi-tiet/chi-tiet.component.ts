import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CRUD_MESSAGES } from 'app/shared/messages/crud.messages';
import { AttributeValueEntity } from 'app/shared/services/atrribute-value/atrribute-value.interface';
import { AttributeValueService } from 'app/shared/services/atrribute-value/atrribute-value.service';
import { HinhAnhSanPhamCloudinaryService } from 'app/shared/services/ha-san-pham/ha-san-pham-cloudinary.service';
import { HinhAnhSanPhamService } from 'app/shared/services/ha-san-pham/ha-san-pham.service';
import { ProductEntity } from 'app/shared/services/product/product.interface';
import { ProductService } from 'app/shared/services/product/product.service';
import { ReviewSanPhamEntity } from 'app/shared/services/review-san-pham/review-san-pham.interface';
import { UserEntity } from 'app/shared/services/user/user.interface';
import { RequestQueryBuilder } from 'nest-crud-client';

@Component({
  selector: 'ngx-chi-tiet',
  templateUrl: './chi-tiet.component.html',
  styleUrls: ['./chi-tiet.component.scss'],
})
export class ChiTietComponent implements OnInit {
  maSanPham: string;
  product: ProductEntity;
  thongTinSanPham: ProductEntity = {};
  hinhAnhReview: string;
  files = [];
  isUploadHinhAnh = false;
  isLuuTTSP = false;
  attributesId: string;
  attributeValue: AttributeValueEntity = {
    value: '',
  };
  isLuuTTTT = false;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toast: NbToastrService,
    private attributeValueService: AttributeValueService,
    private hinhAnhSanPhamCloudinaryService: HinhAnhSanPhamCloudinaryService,
    private hinhAnhSanPhamSevice: HinhAnhSanPhamService) {
    this.maSanPham = this.route.snapshot.paramMap.get('id');
    this.attributeValue.productId = this.maSanPham;
    this.productService.getOne(this.maSanPham, this.getBuilder()).subscribe(value => {
      this.hinhAnhReview = value.anhMinhHoa;
      this.product = value;
    });
  }
  async luuThongTinSanPham() {
    try {
      this.isLuuTTSP = true;
      this.productService.put(this.product.productId, this.thongTinSanPham).subscribe(value => {
        this.toast.success('Đã cập nhật thông tin');
        this.isLuuTTSP = false;
      });
    } catch (error) {
      this.isLuuTTSP = false;
      this.toast.danger(error);
    }
  }
  ngOnInit(): void {
  }

  getBuilder(): RequestQueryBuilder {
    const builder = new RequestQueryBuilder();
    builder.setJoin({ field: 'nhaCungCap' });
    builder.setJoin({ field: 'danhMucSanPham' });
    builder.setJoin({ field: 'hinhAnhSanPhams' });
    // tslint:disable-next-line:max-line-length
    builder.setJoin({ field: 'reviewSanPhams', select: ['danhGia', 'soSao', 'user', 'userId'] as Array<keyof ReviewSanPhamEntity> });
    builder.setJoin({ field: 'reviewSanPhams.user', select: ['displayName'] as Array<keyof UserEntity> });
    // tslint:disable-next-line:max-line-length
    builder.setJoin({ field: 'attributeValues', select: ['attributesId', 'value', 'productId', 'attributes'] as Array<keyof AttributeValueEntity> });
    builder.setJoin({ field: 'attributeValues.attributes', select: ['name'] });


    return builder;
  }

  async onSelect(event) {
    try {
      this.isUploadHinhAnh = true;
      this.toast.info('Đang tải hình ảnh sản phẩm', 'Vui lòng chờ');
      const value = event.addedFiles[0];
      const fileData = value;
      const formData = new FormData();
      formData.append('file', fileData);
      formData.append('upload_preset', 'angular_upload_file');
      formData.append('cloud_name', 'nha-nguyen');
      this.hinhAnhSanPhamCloudinaryService.upLoadFile(formData)
        .subscribe(async hinhAnh => {
          const hinhAnhUpload = await this.hinhAnhSanPhamSevice.create(
            { productId: this.product.productId, url: hinhAnh.url, alt: hinhAnh.original_filename })
            .toPromise();
          this.toast.info('Đã tải xong hình ảnh', 'Thông báo');
          this.isUploadHinhAnh = false;
        });
    } catch (error) {
      this.isUploadHinhAnh = false;
      this.toast.danger(error);
    } finally {
      this.isUploadHinhAnh = false;
    }
  }
  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  isValid() {
    if (!this.attributeValue.value) {
      throw new Error('Vui lòng nhập thuộc tính');
    }
    if (!this.attributeValue.attributesId) {
      throw new Error('Vui lòng chọn tên thuộc tính');
    }
    return true;
  }
  luuThongTinThuocTin() {
    try {
      this.isValid();
      this.isLuuTTTT = true;
      this.attributeValueService.create(this.attributeValue).subscribe(value => {
        this.toast.success(CRUD_MESSAGES.SUCCESS_ADD);
        this.isLuuTTTT = false;
        this.product.attributeValues.push(value);
        this.attributeValue.value = '';
      },
        err => {
          this.isLuuTTTT = false;
          this.toast.warning(err);
        });
    } catch (error) {
      this.isLuuTTTT = false;
      this.toast.warning(error);
    }
  }
  xoaThuocTinh(attributeValueId: string) {
    this.attributeValueService.delete(attributeValueId).subscribe(value => {
      // tslint:disable-next-line:max-line-length
      this.product.attributeValues = this.product.attributeValues.filter(attribute => attribute.attributeValueId !== attributeValueId),
        this.toast.success(CRUD_MESSAGES.SUCCESS_DELETE);
    });
  }
}
