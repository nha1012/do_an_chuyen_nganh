import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { ChuongTrinhKhuyenMaiEntity } from './chuong-trinh-khuyen-mai.interface';

@Injectable({
  providedIn: 'root',
})
export class ChuongTrinhKhuyenMaiService extends CrudBaseService<ChuongTrinhKhuyenMaiEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'chuong-trinh-khuyen-mai',
      },
      httpClient,
    );
  }
  getThongKe(params: { chuongTrinhKhuyenMaiId: string }) {
    return this.http.get(`${environment.rest}/chuong-trinh-khuyen-mai/thong-ke`,
      {
        params: new HttpParams({
          fromObject: {
            ...params,
            startDate: params.chuongTrinhKhuyenMaiId,
          },
        }),
      },
    );
  }
}
