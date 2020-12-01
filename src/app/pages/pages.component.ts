import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { DTGAuthService } from 'ditagis-auth';

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
  constructor(
    private authService: DTGAuthService,
  ) { }

  menu = MENU_ITEMS;
  ngOnInit() {
    this.menu.forEach((item) => {
      if (item.data) {
        this.authService
          .isAccess({ appId: item.data })
          .toPromise()
          .then((value) => (item.hidden = !value));
      }
    });
  }
}
