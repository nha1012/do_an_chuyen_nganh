import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhMucSanPhamComponent } from './danh-muc-san-pham.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NbCardModule, NbInputModule } from '@nebular/theme';
import { ThemeModule } from 'app/@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [DanhMucSanPhamComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NbCardModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: DanhMucSanPhamComponent
      }
    ])
  ]
})
export class DanhMucSanPhamModule {}
