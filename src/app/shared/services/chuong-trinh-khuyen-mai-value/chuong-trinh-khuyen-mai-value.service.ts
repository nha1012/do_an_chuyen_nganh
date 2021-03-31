import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { ChuongTrinhKhuyenMaiValueEntity } from './chuong-trinh-khuyen-mai-value.interface';

@Injectable({
  providedIn: 'root',
})
export class ChuongTrinhKhuyenMaiValueService extends CrudBaseService<ChuongTrinhKhuyenMaiValueEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'chuong-trinh-khuyen-mai-value',
      },
      httpClient,
    );
  }
}
