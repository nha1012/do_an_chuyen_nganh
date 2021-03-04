import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCaLamComponent } from './select-ca-lam.component';
import { NbSelectModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectCaLamComponent],
  imports: [CommonModule, NbSelectModule, FormsModule],
  exports: [SelectCaLamComponent],
})
export class SelectCaLamModule {}
