import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { DanhMucSanPhamEntity } from './danh-muc-san-pham.interface';

@Injectable({
  providedIn: 'root',
})
export class DanhMucSanPhamService extends CrudBaseService<DanhMucSanPhamEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'danh-muc-san-pham',
      },
      httpClient,
    );
  }
}
