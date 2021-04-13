
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'app/shared/services/transaction/transaction.service';
import { TranSactionEntity } from 'app/shared/services/transaction/transaction.interface';
import { RequestQueryBuilder } from 'nest-crud-client';
import { NhaCungCapService } from 'app/shared/services/nha-cung-cap/nha-cung-cap.service';
import { DanhMucSanPhamService } from 'app/shared/services/danh-muc-san-pham/danh-muc-san-pham.service';

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
    private nhaCungCapService: NhaCungCapService,
    private danhMucSanPhamService: DanhMucSanPhamService,
    ){}
  buider():RequestQueryBuilder{
    const builder = new RequestQueryBuilder();
    builder.setJoin({field:'user'});
    builder.setJoin({field:'orders'});
    builder.setJoin({field:'orders.product'});
    return builder;
  }
  async ngOnInit() {
    // lấy id transaction từ đường dẫn trình duyệt
    this.tranSactionId = this.router.snapshot.paramMap.get('id')
    // lấy 1 transaction với điều kiện id = this.trấnctionId
    /**
      * await và toPromise dùng để xữ lý bất đồng bộ, 
      * có nghĩa là 1 cái gì đó lấy từ server sẽ có khoảng thời gian nhất định(tuỳ vào mạng mạnh hay yếu)
      * dừng await để đợi nó về trả về két quả mới thực hiện cái tiếp theo
      */
    // 
    this.transaction = await this.transactionService.getOne(this.tranSactionId, this.buider()).toPromise();
    /**
     * Khi có kết quả thì dùng vòng lặp để lấy được product trong mảng orders
     * rồi từ product lấy tiếp nhà cung cấp từ server về xem diagrams để hiểu
     */
    this.transaction.orders.map(async order => {
      order.product.nhaCungCap = await this.nhaCungCapService.getOne(order.product.nhaCungCapId).toPromise();
      // Làm tương tự với danhMucSanPham
      order.product.danhMucSanPham = await this.danhMucSanPhamService.getOne(order.product.danhMucSanPhamId).toPromise();
    });
  }

}
