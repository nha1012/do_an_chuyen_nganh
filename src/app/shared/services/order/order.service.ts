import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { OrderEntity } from './order.interface';

@Injectable({
  providedIn: 'root',
})
export class OrderService extends CrudBaseService<OrderEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'order',
      },
      httpClient,
    );
  }
  getBaoCaoTheoNhaCungCap() {
    return this.http.get(`${environment.rest}/order/bc-theo-nha-cung-cap`);
  }
  getBaoCaoTheoNgay(params: { startDate: Date, endDate: Date }) {
    return this.http.get(`${environment.rest}/order/bc-theo-ngay`,
      {
        params: new HttpParams({
          fromObject: {
            ...params,
            startDate: params.startDate.toJSON(),
            endDate: params.endDate.toJSON(),
          },
        }),
      },
    );
  }
}
