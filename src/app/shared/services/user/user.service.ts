import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment.prod';
import { CrudBaseService } from 'nest-crud-typeorm-client';
import { UserEntity } from './user.interface';

@Injectable({ providedIn: 'root' })
export class UsersService extends CrudBaseService<UserEntity> {
  constructor(httpClient: HttpClient) {
    super(
      {
        apiUrl: environment.rest,
        entity: 'user',
      },
      httpClient,
    );
  }
}
