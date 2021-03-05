import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RoleEnum } from 'app/shared/services/role/role.interface';
import { UserEntity } from 'app/shared/services/user/user.interface';
import { UsersService } from 'app/shared/services/user/user.service';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';

@Component({
  selector: 'ngx-select-nhan-vien',
  templateUrl: './select-nhan-vien.component.html',
  styleUrls: ['./select-nhan-vien.component.scss'],
})
export class SelectNhanVienComponent implements OnInit {
  @Output() nhanVienSelected = new EventEmitter<string>();
  nhanViens: UserEntity[];
  constructor(private userService: UsersService) {
    this.userService
      .getMany({ filter: { field: 'roleId', operator: '$eq', value: [RoleEnum.Admin, RoleEnum.Employee] } })
      .subscribe(value => this.nhanViens = value);
  }
  ngOnInit(): void {

  }
}
