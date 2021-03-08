import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { TranSactionEntity } from './transaction.interface';

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
}
