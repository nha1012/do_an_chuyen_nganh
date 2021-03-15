import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() placerHolder: string = '';
  nhanViens: UserEntity[];
  constructor(private userService: UsersService) {
    this.userService
      .getMany(this.getBuilder())
      .subscribe(value => this.nhanViens = value);
  }
  ngOnInit(): void {

  }
  getBuilder() {
    const builder = new RequestQueryBuilder();
    builder.select(['userId', 'displayName', 'roleId'] as Array<keyof UserEntity>);
    builder.setFilter({ field: 'roleId', operator: '$in', value: [RoleEnum.Admin, RoleEnum.Employee] });
    return builder;
  }
}
