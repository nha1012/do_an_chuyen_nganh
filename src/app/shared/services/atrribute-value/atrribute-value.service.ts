import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { AttributeValueEntity } from './atrribute-value.interface';

@Injectable({
  providedIn: 'root',
})
export class AttributeValueService extends CrudBaseService<AttributeValueEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'attribute-value',
      },
      httpClient,
    );
  }
}
