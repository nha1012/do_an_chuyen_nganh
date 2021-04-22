import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { CartItem, TypeTransaction } from 'app/pages/ban-hang/cart-item.interface';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { OrderEntity } from 'app/shared/services/order/order.interface';
import { OrderService } from 'app/shared/services/order/order.service';
import { RoleEnum } from 'app/shared/services/role/role.interface';
import { TranSactionEntity } from 'app/shared/services/transaction/transaction.interface';
import { TransactionService } from 'app/shared/services/transaction/transaction.service';
import { UserEntity } from 'app/shared/services/user/user.interface';
import { CaLamEnum } from 'app/shared/services/workshift/workshift.interface';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { ProductService } from 'app/shared/services/product/product.service';
import { UsersService } from 'app/shared/services/user/user.service';
import { UserService } from 'app/@core/mock/users.service';
import { RequestQueryBuilder } from 'nest-crud-client';
import { DatatableComponent, DatatableService } from 'ngn-datatable';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'ngx-dang-ky-ca-lam-dialog',
  templateUrl: './phieu-mua-hang-dialog.component.html',
  styleUrls: ['./phieu-mua-hang-dialog.component.scss'],
})
export class PhieuMuaHangDialogComponent implements OnInit {
  @ViewChild('hoaDon', { static: false }) hoaDon: ElementRef;
  table: DatatableComponent<UserEntity>;

 
  CaLamEnum = CaLamEnum;
  caLamSelected: CaLamEnum;
  date: Date;
  data: any;
  isGiaoDich = false;
  lstCart: CartItem[] = [];
  isActive = false;
  tongTien = 0;
  locKhachHang: string;
  constructor(
    private toast: NbToastrService,
    protected ref: NbDialogRef<PhieuMuaHangDialogComponent>,
    private transactionService: TransactionService,
    private orderService: OrderService,
    private authService: AuthService,
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    protected route: ActivatedRoute,
    ) { }
  ngOnInit(): void {
  }
  khachHangId(event: string){
    this.locKhachHang = event;
  }
  getBuilder(builder: RequestQueryBuilder){
    builder.setFilter({field:'status', operator: '$eq' , value:true});
    builder.setJoin({field: 'User'});

    this.locKhachHang &&
    builder.setFilter({ field: 'userId' , operator: '$eq' , value: this.locKhachHang});
  }
  handleHuy() {
    this.ref.close();
  }
  checkValid() {
    this.toast.info('Đang xử lý, vui lòng chờ');
    return true;
  }
  async xacNhanGiaoDich() {
    try {
      this.checkValid();
      this.isGiaoDich = true;
      let newTransaction = await this.transactionService
        .create({ userId: this.locKhachHang, payment: TypeTransaction.TAIQUAY, status: true }).toPromise();
      this.lstCart.forEach(async (value: CartItem) => {
        if (value.tongSoLuong < value.soLuong) {
          this.isGiaoDich = false;
          this.toast.warning('Không đủ sản phẩm trong kho, vui lòng xem lại');
          return;
        }
        const order: OrderEntity = {
          productId: value.productId,
          transactionId: newTransaction.transactionId,
          status: true,
          qty: value.soLuong,
          tongTien: value.thanhTien,
        };
        const orderCreated = await this.orderService.create(order).toPromise();
        if (orderCreated) {
          if (newTransaction.qty) {
            newTransaction.qty++;
          } else {
            newTransaction.qty = 1;
          }
          if (newTransaction.tongTien) {
            newTransaction.tongTien += orderCreated.tongTien;
          } else {
            newTransaction.tongTien = orderCreated.tongTien;
          }
          const transactionUpdate: TranSactionEntity = {
            tongTien: newTransaction.tongTien,
            qty: newTransaction.qty,
          };
          // update lại bảng giao dịch
          newTransaction = await this.transactionService.put(newTransaction.transactionId, transactionUpdate)
            .toPromise();
          // xoá đi sản phẩm ở bảng product
          this.productService.put(value.productId, { soLuong: value.tongSoLuong - value.soLuong }).toPromise();
          this.tongTien = newTransaction.tongTien;
          this.isActive = true;
          this.isGiaoDich = false;
          this.toast.info('Đã chuyển qua trang xuất hoá đơn');
        }
      });
    } catch (error) {
      this.isGiaoDich = false;
      this.ref.close(false);
      this.toast.danger(error);
    }
  }
  xuatHoaDonBanHang() {
    const DATA = document.getElementById('hoaDon');
    html2canvas(DATA).then(canvas => {
      const fileWidth = 208;
      const fileHeight = canvas.height * fileWidth / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      const PDF = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('hoa-don.pdf');
    }).catch(err => {
      this.toast.danger(err);
    }).finally(() => {
      this.ref.close(true);
      this.toast.success('Đã xuất hoá đơn');
    });
  }
}
