import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, FormsModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule, NbSpinnerModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
