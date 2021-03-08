import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { ProductEntity } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends CrudBaseService<ProductEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'product',
      },
      httpClient,
    );
  }
}
