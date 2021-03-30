import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { AttributesEntity } from './atrributes.interface';

@Injectable({
  providedIn: 'root',
})
export class AttributesService extends CrudBaseService<AttributesEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'attributes',
      },
      httpClient,
    );
  }
}
