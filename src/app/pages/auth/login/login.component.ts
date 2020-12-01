import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { DTGAuthService } from 'ditagis-auth';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ga-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isLoging = false;
  constructor(
    private authService: DTGAuthService,
    private toast: NbToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  async login() {
    this.isLoging = true;

    try {
      if (this.isValid()) {
        const isAuth = await this.authService.authenticate({
          username: this.username,
          password: this.password,
          appId: environment.appId.appId,
        });
        if (isAuth) {
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigateByUrl(returnUrl || '/');
        } else {
          throw new Error('Sai tài khoản hoặc mật khẩu');
        }
      }
    } catch (error) {
      this.toast.danger(error);
    } finally {
      this.isLoging = false;
    }
  }

  isValid(): boolean {
    if (this.username && this.password) {
      return true;
    } else {
      this.toast.danger('Vui lòng nhập đầy đủ thông tin');
      return false;
    }
  }
}
