import { HttpClient } from '@angular/common/http';
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
}
