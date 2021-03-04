import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CRUDBaseService {
  private token: string;
  constructor(private http: HttpClient) {
    this.token = this.getAccessToken();
  }

  getAccessToken() {
    if (localStorage.getItem('access_token')) {
      return localStorage.getItem('access_token') || '';
    }
    return '';
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' + btoa('username:password'));
  }

  get(url: string) {
    return this.http.get(url, {
      headers: { access_token: this.token },
    });
  }

  post(url: string, data: any) {
    return this.http.post(url, data, {
      headers: { access_token: this.token },
    });
  }
  delete(url: string) {
    return this.http.delete(url, {
      headers: { access_token: this.token },
    });
  }
  put(url: string, data: any) {
    return this.http.put(url, data, {
      headers: { access_token: this.token },
    });
  }
  path(url: string, data: any) {
    return this.http.patch(url, data, {
      headers: { access_token: this.token },
    });
  }
}
