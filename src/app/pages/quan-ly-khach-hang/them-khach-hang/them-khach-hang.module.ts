import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemKhachHangComponent } from './them-khach-hang.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ThemKhachHangComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    NbSpinnerModule,
    RouterModule.forChild([{
      path:'',
      component: ThemKhachHangComponent,
    }])
  ]
})
export class ThemKhachHangModule { }
