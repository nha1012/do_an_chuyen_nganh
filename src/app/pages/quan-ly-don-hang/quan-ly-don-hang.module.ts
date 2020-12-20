import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      pathMatch: 'full',
      redirectTo: 'danh-sach',
    },
    {
      path: 'danh-sach',
      loadChildren: () => import('./danh-sach/danh-sach.module').then(m => m.DanhSachModule),
    },
    {
      path: 'bao-cao',
      loadChildren: () => import('./bao-cao/bao-cao.module').then(m => m.BaoCaoModule),
    },
  ]),
  ],
})
export class QuanLyDonHangModule { }
