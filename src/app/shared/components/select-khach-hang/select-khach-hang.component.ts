import { UserEntity } from 'app/shared/services/user/user.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { UsersService } from 'app/shared/services/user/user.service';
import { RoleEnum } from 'app/shared/services/role/role.interface';

@Component({
  selector: 'ngx-select-khach-hang',
  templateUrl: './select-khach-hang.component.html',
  styleUrls: ['./select-khach-hang.component.scss'],
})
export class SelectKhachHangComponent implements OnInit {
  @Output() KhachHangSelected = new EventEmitter();
  @Input() placerHolder: string = '';
  @Input() fullWidth: boolean = false;
  khachhangs: UserEntity[];
  constructor(private userService: UsersService) {
    this.userService.getMany(this.getBuilder()).subscribe(value=>this.khachhangs)
  }
  ngOnInit(): void {

  }
  getBuilder(){
    const builder = new RequestQueryBuilder();
    builder.select(['userId', 'displayName', 'roleId'] as Array<keyof UserEntity>);
    builder.setFilter({ field: 'roleId', operator: '$in', value: [RoleEnum.User] });
    builder.sortBy({field:'displayName', order: 'ASC'})
    return builder;
  }

}
