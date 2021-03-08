import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { AvatarEntity } from './avatar.interface';

@Injectable({
  providedIn: 'root',
})
export class AvatarService extends CrudBaseService<AvatarEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'avatar',
      },
      httpClient,
    );
  }
}
