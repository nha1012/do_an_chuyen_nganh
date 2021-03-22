import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonHangComponent } from './don-hang.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DonHangComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: DonHangComponent,
    }]),
  ],
})
export class DonHangModule { }
