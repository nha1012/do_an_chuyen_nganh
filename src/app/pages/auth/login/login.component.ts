import { AuthService } from './../../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { first } from 'rxjs/operators';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@Component({
  selector: 'ngx-ga-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isLoging = false;
  error: string;
  status = {
    loadLogin: false,
  };
  constructor(
    private toast: NbToastrService,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    if (tokenGetter() !== null) {
      return this.router.navigate(['pages']);
    }
  }

  async login() {
    try {
      this.status.loadLogin = true;
      this.authService.login(this.username, this.password)
        .pipe(first())
        .subscribe(
          result => {
            return this.router.navigate(['pages']); },
          err => {
            this.status.loadLogin = false;
            this.toast.danger('Sai tài khoản hoặc mật khâu!', 'Unauthorized'); },
    );
    } catch (error) {
      this.status.loadLogin = false;
      this.toast.danger('Lỗi hệ thống', 'Unauthorized') ;
    }
  }

}
