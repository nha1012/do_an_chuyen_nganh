import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { rejects } from 'assert';
import { CrudBaseService } from 'nest-crud-typeorm-client';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthorized: boolean = false;
  constructor(private router: Router) {}
  logIn(userName: string, password: string) {

    if (userName === 'admin' && password === 'admin') {
     this.isAuthorized = true;
     return this.router.navigateByUrl('/pages');
    }
    return this.isAuthorized = false;
  }
  logOut() {
    this.isAuthorized = false;
  }
  isAuthenticate() {
    if (!this.isAuthorized) {
      this.router.navigateByUrl('/auth/login');
      return this.isAuthorized;
    }
    return true;
  }
}
