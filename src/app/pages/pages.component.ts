import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { getRoleId } from 'app/shared/services/app.service';
import { RoleEnum } from 'app/shared/services/role/role.interface';
import { MENU_ITEMS } from './pages-menu';
@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent implements OnInit {
  roleId: string;
  constructor() {
    this.roleId = getRoleId();
  }
  roleMenu = [
    RoleEnum.Admin, RoleEnum.Employee, RoleEnum.User,
  ];
  menu = MENU_ITEMS;

  ngOnInit(): void {
    this.setAccessMenu(this.menu);

  }
  setAccessMenu(menus: NbMenuItem[]) {
    const menuVisibles: NbMenuItem[] = [];
    menus.forEach((menu) => {
      if (menu.data === this.roleId || this.roleId === RoleEnum.Admin) {
        menu.hidden = false;
        menuVisibles.push(menu);
      }
      if (menu.children) {
        menuVisibles.push(
          ...this.setAccessMenu(menu.children),
        );
      }
    });
    return menuVisibles;
  }
}
