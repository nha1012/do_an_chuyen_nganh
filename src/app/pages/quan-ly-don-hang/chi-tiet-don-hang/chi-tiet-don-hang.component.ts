
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'app/shared/services/transaction/transaction.service';
import { TranSactionEntity } from 'app/shared/services/transaction/transaction.interface';
import { RequestQueryBuilder } from 'nest-crud-client';
import { NhaCungCapService } from 'app/shared/services/nha-cung-cap/nha-cung-cap.service';

@Component({
  selector: 'ngx-chi-tiet-don-hang',
  templateUrl: './chi-tiet-don-hang.component.html',
  styleUrls: ['./chi-tiet-don-hang.component.scss']
})
export class ChiTietDonHangComponent implements OnInit {
  tranSactionId: string;
  transaction:TranSactionEntity;
  constructor(
    private transactionService: TransactionService,
    private router: ActivatedRoute,
    ){
    this.tranSactionId = this.router.snapshot.paramMap.get('id')
    this.transactionService.getOne(this.tranSactionId, this.buider() ).subscribe(value=>{
      this.transaction = value;
    })
  }
  buider():RequestQueryBuilder{
    const builder = new RequestQueryBuilder();
    builder.setJoin({field:'user'});
    builder.setJoin({field:'orders'});
    builder.setJoin({field:'orders.product'});
    // builder.setJoin({field:'orders.product.danhMucSanPham'});
    // builder.setJoin({field:'orders.product.nhaCungCap'});
    return builder;
  }
  ngOnInit(): void {
    console.log(this.transaction);
    
  }

}
