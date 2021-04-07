import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment.prod';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const rest = `${environment.rest}/auth`;
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import { UserEntity } from '../user/user.interface';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthorized: boolean = false;
  constructor(private router: Router, private http: HttpClient) { }
  login(userName: string, password: string): Observable<boolean> {
    // tslint:disable-next-line:max-line-length
    return this.http.post<{ accessToken: string, userId: string, displayName: string, roleId: string }>(`${rest}/login`, { username: userName, password: password })
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.accessToken);
          localStorage.setItem('userId', result.userId);
          localStorage.setItem('displayName', result.displayName);
          localStorage.setItem('roleId', result.roleId);
          return true;
        }),
      );
  }
  register(user: UserEntity): Observable<UserEntity> {
    return this.http.post(`${rest}/register`, user);
  }
  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('userId');
    localStorage.removeItem('displayName');
    localStorage.removeItem('roleId');
    this.router.navigate(['auth']);
  }
}
