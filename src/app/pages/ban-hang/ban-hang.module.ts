import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanHangComponent } from './ban-hang.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BanHangComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BanHangComponent }]),
  ],
})
export class BanHangModule { }
