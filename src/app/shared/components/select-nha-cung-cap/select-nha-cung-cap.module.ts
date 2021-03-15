import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { SelectNhaCungCapComponent } from './select-nha-cung-cap.interface';



@NgModule({
  declarations: [SelectNhaCungCapComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbSelectModule,
  ],
  exports: [SelectNhaCungCapComponent],
})
export class SelectNhaCungCapModule { }
