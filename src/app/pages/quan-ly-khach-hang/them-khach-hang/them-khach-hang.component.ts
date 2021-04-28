import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CRUD_MESSAGES } from 'app/shared/messages/crud.messages';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { RoleEnum } from 'app/shared/services/role/role.interface';
import { UserEntity } from 'app/shared/services/user/user.interface';

@Component({
  selector: 'ngx-them-khach-hang',
  templateUrl: './them-khach-hang.component.html',
  styleUrls: ['./them-khach-hang.component.scss'],
})
export class ThemKhachHangComponent implements OnInit {
  thongTinKhachHang: UserEntity = {};
  isLoadThemKhachHang = false;
  constructor(private authService: AuthService, private toast: NbToastrService) { }

  ngOnInit(): void {
  }
  isValidUsername(){
    if (!this.thongTinKhachHang.username) {
      throw new Error('Vui lòng nhập tên tài khoản');
    }
    if (this.thongTinKhachHang.username && this.thongTinKhachHang.username.length < 6) {
      throw new Error('Vui lòng nhập tài khoản trên 5 ký tự');
    }
    if (this.thongTinKhachHang.username && this.thongTinKhachHang.username.length > 30) {
      throw new Error('Vui lòng nhập tài khoản dưới 30 ký tự');
    }
  }
  isValidPassword(){
    if (!this.thongTinKhachHang.password) {
      throw new Error('Vui lòng nhập mật khẩu');
    }
    if (this.thongTinKhachHang.username && this.thongTinKhachHang.password.length < 6) {
      throw new Error('Vui lòng nhập mật khẩu trên 5 ký tự');
    }
    if (this.thongTinKhachHang.username && this.thongTinKhachHang.password.length > 30) {
      throw new Error('Vui lòng nhập mật khẩu dưới 30 ký tự');
    }
    if (this.thongTinKhachHang.username && this.thongTinKhachHang.password.search('`') > -1) {
      throw new Error('Vui lòng nhập mật khẩu không chứa dấu `');
    }
  }
  isValid() {
    this.isValidUsername()
    this.isValidPassword()
    if (!this.thongTinKhachHang.displayName) {
      throw new Error('Vui lòng nhập tên tài khoản');
    }
    if (!this.thongTinKhachHang.address) {
      throw new Error('Vui lòng nhập địa chỉ');
    }
    if (!this.thongTinKhachHang.phoneNumber) {
      throw new Error('Vui lòng nhập số điện thoại');
    }
    if (!this.thongTinKhachHang.email) {
      throw new Error('Vui lòng nhập email');

    }
    return true;
  }
  themkhachhang() {
    try {
      this.isLoadThemKhachHang = true;
      this.isValid();
      this.thongTinKhachHang.roleId = RoleEnum.User;
      this.authService.register(this.thongTinKhachHang).subscribe(value => {
        this.toast.success(CRUD_MESSAGES.SUCCESS_ADD);
        this.isLoadThemKhachHang = false;
      });
    } catch (error) {
      this.toast.warning(error);
      this.isLoadThemKhachHang = false;

    }
  }
}
