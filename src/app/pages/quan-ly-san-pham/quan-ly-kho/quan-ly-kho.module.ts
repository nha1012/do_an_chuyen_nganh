import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyKhoComponent } from './quan-ly-kho.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [QuanLyKhoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: QuanLyKhoComponent,
      },
    ]),
  ],
})
export class QuanLyKhoModule {}
