import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbDatepickerModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { SelectCaLamModule } from 'app/shared/components/select-ca-lam/select-ca-lam.module';
import { SelectNhanVienModule } from 'app/shared/components/select-nhan-vien/select-nhan-vien.module';
import { NgnDatatableModule } from 'ngn-datatable';
import { QuanLyCaLamComponent } from './quan-ly-ca-lam.component';

@NgModule({
  declarations: [QuanLyCaLamComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    FormsModule,
    NgnDatatableModule,
    NbDatepickerModule,
    NbButtonModule,
    SelectCaLamModule,
    SelectNhanVienModule,
    RouterModule.forChild([
      {
        pathMatch: 'full',
        path: '',
        component: QuanLyCaLamComponent,
      },
    ]),
  ],
})
export class QuanLyCaLamModule { }
