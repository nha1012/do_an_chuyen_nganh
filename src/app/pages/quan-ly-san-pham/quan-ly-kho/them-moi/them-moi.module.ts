import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemMoiComponent } from './them-moi.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { SelectLoaiSanPhamModule } from 'app/shared/components/select-loai-san-pham/select-loai-san-pham.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
import { SelectNhaCungCapModule } from 'app/shared/components/select-nha-cung-cap/select-nha-cung-cap.module';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [ThemMoiComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    SelectLoaiSanPhamModule,
    FormsModule,
    CKEditorModule,
    NbSpinnerModule,
    NbButtonModule,
    SelectNhaCungCapModule,
    NbIconModule,
    NgxDropzoneModule,
    RouterModule.forChild([{
      path: '',
      component: ThemMoiComponent,
    }]),
  ],
})
export class ThemMoiModule { }
