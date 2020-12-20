import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaoCaoComponent } from './bao-cao.component';
import { RouterModule } from '@angular/router';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [BaoCaoComponent],
  imports: [
    CommonModule,
    NbCardModule,
    RouterModule.forChild([{
      path: '',
      component: BaoCaoComponent,
    }]),
  ],
})
export class BaoCaoModule { }
