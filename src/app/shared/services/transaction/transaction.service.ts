import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService, RequestQueryBuilder } from 'nest-crud-typeorm-client';
import { TranSactionEntity, TypeTGBaoCao } from './transaction.interface';

@Injectable({ providedIn: 'root' })
export class TransactionService extends CrudBaseService<TranSactionEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'transaction',
      },
      httpClient,
    );
  }
  // getThongKe(params: RequestQueryBuilder) {
  //   return this.http.get(`${environment.rest}/transaction/thong-ke`, { params: params });
  // }
  getThongKe(params: { startDate: Date, endDate: Date }) {
    return this.http.get(`${environment.rest}/transaction/thong-ke`,
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
