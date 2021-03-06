import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChiTietComponent } from './chi-tiet.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { SelectLoaiSanPhamModule } from 'app/shared/components/select-loai-san-pham/select-loai-san-pham.module';
import { SelectNhaCungCapModule } from 'app/shared/components/select-nha-cung-cap/select-nha-cung-cap.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SelectThuocTinhModule } from 'app/shared/components/select-thuoc-tinh/select-thuoc-tinh.module';
import { SelectCTKMModule } from 'app/shared/components/select-ctkm/select-ctkm.module';
@NgModule({
  declarations: [ChiTietComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    SelectLoaiSanPhamModule,
    SelectNhaCungCapModule,
    NbTabsetModule,
    FormsModule,
    NgxDropzoneModule,
    NbSpinnerModule,
    CKEditorModule,
    SelectThuocTinhModule,
    SelectCTKMModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: ChiTietComponent,
      },
    ]),
  ],
})
export class ChiTietModule { }
