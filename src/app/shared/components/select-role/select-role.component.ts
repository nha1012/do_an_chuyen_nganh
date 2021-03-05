import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RoleEnum } from 'app/shared/services/role/role.interface';

@Component({
  selector: 'ngx-select-role',
  templateUrl: './select-role.component.html',
  styleUrls: ['./select-role.component.scss'],
})
export class SelectRoleComponent implements OnInit {
  @Output() valueChange = new EventEmitter<string>();
  constructor() { }
  RoleEnum = RoleEnum;
  ngOnInit(): void {
  }

}
