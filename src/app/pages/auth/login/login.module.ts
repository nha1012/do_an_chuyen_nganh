import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbSpinnerModule, NbToastrModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, FormsModule,
    NbButtonModule,
    NbCardModule,
    FormsModule,
    NbInputModule,
    NbSpinnerModule,
    NbToastrModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule { }
