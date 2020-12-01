import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { tap } from 'rxjs/operators';
import { DTGAuthService } from 'ditagis-auth';
@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(
    private authService: DTGAuthService,
    private toast: NbToastrService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const appId = next.data.appId as string;
    return this.authService.isAccess({  appId }).pipe(
      tap((isAccess) => {
        if (!isAccess) {
          this.toast.danger('Không có quyền truy cập', 'CẢNH BÁO');
        }
      })
    );
  }
}
