import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { HandleCongTruEnum } from 'app/shared/components/cell-so-luong-san-pham/cell-so-luong-san-pham.component';
import { PhieuMuaHangDialogComponent } from 'app/shared/components/phieu-mua-hang-dialog/phieu-mua-hang-dialog.component';
import { ProductEntity } from 'app/shared/services/product/product.interface';
import { ProductService } from 'app/shared/services/product/product.service';
import { WorkshiftEntity } from 'app/shared/services/workshift/workshift.interface';
import { RequestQueryBuilder } from 'nest-crud-client';
import { DatatableComponent, DatatableService } from 'ngn-datatable';
import { CartItem } from './cart-item.interface';

@Component({
  selector: 'ngx-ban-hang',
  templateUrl: './ban-hang.component.html',
  styleUrls: ['./ban-hang.component.scss'],
})
export class BanHangComponent implements OnInit {
  //Danh sách giỏ hàng mỗi phần tử trong này là 1 CartItem bấm và cart Item để Thấy chi tiết các thuộc tính
  // Biến tongSoLuong trong CartItem là số lượng còn lại trong kho cuar sản phẩm đó
  lstCart: CartItem[] = [];
  tgLamViec: any;
  @ViewChild('table', { static: false })
  table: DatatableComponent<ProductEntity>;

  datatableService: DatatableService<ProductEntity> = {
    service: this.productService,
    primaryField: 'productId',
    builder: this.getBuilder.bind(this),
  };
  filterEntity: WorkshiftEntity = {
    workshift: undefined,
    userId: '',
  };
  productId: string;
  constructor(
    private productService: ProductService,
    protected route: ActivatedRoute,
    private toast: NbToastrService,
    private dialog: NbDialogService,
  ) {
  }
  ngOnInit(): void {
  }
  loc($event) {
    this.productId = $event;
    this.table.loadData();
  }
  //Tăng và giảm số lượng sản phẩm trong giỏ hàng
  // Giờ phải kiểm tra số lượng trước khi cộng
  handleActionSanPham($event, productId: string) {
    // Biến value ở đây là CartItem
    // Từ value ở đây lấy ra số luong san pham roi thuc hien kiểm tra
    this.lstCart.forEach((value, index) => {
      if (productId === value.productId) {
        if ($event === HandleCongTruEnum.CONG) {
          //Khi bấm +
          if(value.soLuong>=value.tongSoLuong){
          }else{
            value.thanhTien += value.giaKhuyenMai;
            value.soLuong++;
          }
        } else if ($event === HandleCongTruEnum.TRU) {
          //Khi bấm -
          value.thanhTien -= value.giaKhuyenMai;
          value.soLuong--;

        } else {
          //Khi bấm xoá
          this.lstCart.splice(index, 1);
        }
      }
    });
  }
  handleXoaGioHang(productId: string) {
    if (confirm('Bạn có chắc chắn muốn xoá')) {
      this.lstCart.forEach((value, index) => {
        if (productId === value.productId) {
          this.lstCart.splice(index, 1);
        }
      });
    }
  }
  getBuilder(builder: RequestQueryBuilder) {
    builder.select(['anhMinhHoa', 'danhMucSanPham', 'giaKhuyenMai', 'giaSanPham', 'moTa', 'soLuong', 'tenSanPham', 'nhaCungCap', 'anhMinhHoa', 'status'] as Array<keyof ProductEntity>);
    builder.setJoin({ field: 'danhMucSanPham' });
    builder.setJoin({ field: 'nhaCungCap' });
    builder.setFilter({ field: 'status', operator: '$eq', value: true });
    builder.setFilter({ field: 'soLuong', operator: '$gte', value: 1 });

    this.productId &&
      builder.setFilter({ field: 'productId', operator: '$eq', value: this.productId });
  }
  checkValid(): boolean {
    if (this.lstCart.length <= 0) {
      throw new Error('Vui lòng chọn sản phẩm');
    }
    return true;
  }
  banHang() {
    try {
      this.checkValid();
      this.dialog.open(PhieuMuaHangDialogComponent, { context: { lstCart: this.lstCart } }).onClose
        .subscribe(value => {
          if (value) {
            this.table.loadData();
          }
        });
    } catch (error) {
      this.toast.danger(error);
    }
  }

  clickRowHandle($event) {
    if ($event.type === 'dblclick') {
      const { tenSanPham, giaKhuyenMai, soLuong, productId } = $event.row;
      const cartItem: CartItem = {
        productId: productId,
        tenSanPham: tenSanPham,
        giaKhuyenMai: giaKhuyenMai,
        soLuong: 1,
        thanhTien: giaKhuyenMai * 1,
        tongSoLuong: soLuong,
      };
      const condition = this.lstCart.find(product => product.productId === $event.row.productId);

      if (condition) {
        this.lstCart = this.lstCart.filter(product => product.productId !== condition.productId);

        const cart = {
          productId: condition.productId,
          tenSanPham: condition.tenSanPham,
          giaKhuyenMai: condition.giaKhuyenMai,
          soLuong: condition.soLuong + 1,
          thanhTien: condition.thanhTien + condition.giaKhuyenMai,
          tongSoLuong: soLuong,
        };
        return this.lstCart.push(cart);
      }
      this.lstCart.push(cartItem);
    }
  }
}
