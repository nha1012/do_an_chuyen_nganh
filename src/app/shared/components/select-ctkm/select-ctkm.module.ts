import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { SelectCTKMComponent } from './select-ctkm.interface';



@NgModule({
  declarations: [SelectCTKMComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbSelectModule,
  ],
  exports: [SelectCTKMComponent],
})
export class SelectCTKMModule { }
