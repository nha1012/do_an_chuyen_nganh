import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { CRUD_MESSAGES } from 'app/shared/messages/crud.messages';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { RoleEnum } from 'app/shared/services/role/role.interface';
import { UserEntity } from 'app/shared/services/user/user.interface';

@Component({
  selector: 'ngx-them-nhan-vien',
  templateUrl: './them-nhan-vien.component.html',
  styleUrls: ['./them-nhan-vien.component.scss']
})
export class ThemNhanVienComponent implements OnInit {
  thongTinNhanVien:UserEntity={}
  isLoadThemNhanVien = false;
  constructor(private authService : AuthService, private toast: NbToastrService) { }

  ngOnInit(): void {
  }
  isValid(){
    if (!this.thongTinNhanVien.username) {
      throw new Error("Vui lòng nhập tên tài khoản");
      
    }
    if (!this.thongTinNhanVien.password) {
      throw new Error("Vui lòng nhập tên mật khẩu");
      
    }
    if (!this.thongTinNhanVien.displayName) {
      throw new Error("Vui lòng nhập tên tài khoản");
      
    }
    if (!this.thongTinNhanVien.address) {
      throw new Error("Vui lòng nhập địa chỉ");
      
    }
    if (!this.thongTinNhanVien.phoneNumber) {
      throw new Error("Vui lòng nhập số điện thoại");
      
    }
    if (!this.thongTinNhanVien.email) {
      throw new Error("Vui lòng nhập email");
      
    }
    return true;
  }
  themNhanVien(){
    try {
      this.isLoadThemNhanVien = true
    this.isValid()
    this.thongTinNhanVien.roleId = RoleEnum.Employee
      this.authService.register(this.thongTinNhanVien).subscribe(value=>{
        this.toast.success(CRUD_MESSAGES.SUCCESS_ADD)
        this.isLoadThemNhanVien= false
      })
    } catch (error) {
      this.toast.warning(error)
      this.isLoadThemNhanVien= false

    }
    
  }
}
