import { AuthService } from './../../../shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'ngx-ga-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isLoging = false;
  constructor(
    private toast: NbToastrService,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit() {}

  async login() {
    this.authService.logIn(this.username, this.password);
  }

}
