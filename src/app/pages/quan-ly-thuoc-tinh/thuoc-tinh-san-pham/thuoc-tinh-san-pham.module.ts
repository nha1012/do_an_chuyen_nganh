import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuocTinhSanPhamComponent } from './thuoc-tinh-san-pham.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NbButtonModule, NbCardModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { NgnDatatableModule } from 'ngn-datatable';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ThuocTinhSanPhamComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    NgnDatatableModule,
    FormsModule,
    NbSpinnerModule, 
    NbButtonModule,
    RouterModule.forChild([{ path: '',component: ThuocTinhSanPhamComponent }]),
  ],
})
export class ThuocTinhSanPhamModule { }
