import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { AuthComponent } from './auth.component';
import { NbLayoutModule, NbCardModule, NbIconModule } from '@nebular/theme';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    LoginModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    RouterModule.forChild([
      {
        path: '', component: AuthComponent,
        children: [
          { path: '', component: LoginComponent },
          { path: 'login', component: LoginComponent }
        ]
      },
    ])
  ]
})
export class AuthModule { }
