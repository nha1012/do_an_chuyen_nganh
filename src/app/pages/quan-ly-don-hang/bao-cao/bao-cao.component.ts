import { Component, OnInit } from '@angular/core';
import { CRUDBaseService } from 'app/shared/services/crud-base.service';
import { environment } from 'environments/environment.prod';

@Component({
  selector: 'ngx-bao-cao',
  templateUrl: './bao-cao.component.html',
  styleUrls: ['./bao-cao.component.scss'],
})
export class BaoCaoComponent implements OnInit {
  tongTienDaNhanDuoc: number = 0;
  tongTienChuaNhanDuoc: number = 0;

  constructor(private crudBaseService: CRUDBaseService) {
    this.crudBaseService.get(`${environment.rest}/transaction`)
      .subscribe((value: {allTransaction: []}) => {
        value.allTransaction.forEach((element: {amount: number, status: number} ) => {
          if (element.status !== 0) {
            this.tongTienDaNhanDuoc += element.amount;
          } else {
            this.tongTienChuaNhanDuoc += element.amount;
          }
        });
    });
  }

  ngOnInit(): void {
  }
  prettier(tongTien: number) {
    return tongTien.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
