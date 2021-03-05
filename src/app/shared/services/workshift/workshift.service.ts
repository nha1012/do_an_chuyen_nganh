import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { WorkshiftEntity } from './workshift.interface';

@Injectable({
  providedIn: 'root',
})
export class WorkshiftService extends CrudBaseService<WorkshiftEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'workshift',
      },
      httpClient,
    );
  }
}
