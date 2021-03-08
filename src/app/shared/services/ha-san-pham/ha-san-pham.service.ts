import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { HinhAnhSanPhamEntity } from './ha-san-pham.interface';

@Injectable({
  providedIn: 'root',
})
export class HinhAnhSanPhamService extends CrudBaseService<HinhAnhSanPhamEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'hinh-anh-san-pham',
      },
      httpClient,
    );
  }
}
