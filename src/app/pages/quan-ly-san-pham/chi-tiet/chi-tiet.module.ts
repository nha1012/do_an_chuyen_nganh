import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietComponent } from './chi-tiet.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ChiTietComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: ChiTietComponent,
      },
    ]),
  ],
})
export class ChiTietModule { }
