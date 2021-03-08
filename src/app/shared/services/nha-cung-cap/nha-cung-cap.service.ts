import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { NhaCungCapEntity } from './nha-cung-cap.interface';

@Injectable({
  providedIn: 'root',
})
export class NhaCungCapService extends CrudBaseService<NhaCungCapEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'nha-cung-cap',
      },
      httpClient,
    );
  }
}
