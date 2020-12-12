import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CRUDBaseService {
  getAccessToken() {
    if (localStorage.getItem('access_token')) {
      return localStorage.getItem('access_token') || '';
    }
    return '';
  }
  constructor(private http: HttpClient) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' + btoa('username:password'));
  }

  get(url: string) {
    const token = this.getAccessToken();
    return this.http.get(url, {
      headers: { access_token: token },
    });
  }

  post(url: string, data: any) {
    const token = this.getAccessToken();
    return this.http.post(url, data, {
      headers: { access_token: token },
    });
  }
  delete(url: string) {
    const token = this.getAccessToken();
    return this.http.delete(url, {
      headers: { access_token: token },
    });
  }
}
