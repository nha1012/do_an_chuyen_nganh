import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment.prod';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const rest = `${environment.rest}/auth`;
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthorized: boolean = false;
  constructor(private router: Router, private http: HttpClient) {}
  login(userName: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>(`${rest}/login`, {userName: userName, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        }),
      );
  }
  logout() {
    this.router.navigate(['auth']);
    localStorage.removeItem('access_token');
  }
}
