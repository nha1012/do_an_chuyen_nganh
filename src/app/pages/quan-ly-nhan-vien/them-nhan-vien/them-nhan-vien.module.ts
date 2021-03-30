import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ThemNhanVienComponent } from './them-nhan-vien.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ThemNhanVienComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    FormsModule, 
    NbSpinnerModule,
    RouterModule.forChild([{
      path:'',
      component: ThemNhanVienComponent
    }])

    
  ]
})
export class ThemNhanVienModule { }
