import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { ReviewSanPhamEntity } from './review-san-pham.interface';

@Injectable({
  providedIn: 'root',
})
export class ReviewSanPhamService extends CrudBaseService<ReviewSanPhamEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'review-san-pham',
      },
      httpClient,
    );
  }
}
