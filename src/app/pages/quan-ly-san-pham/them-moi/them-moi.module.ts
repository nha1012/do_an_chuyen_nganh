import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemMoiComponent } from './them-moi.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { SelectLoaiSanPhamModule } from 'app/shared/components/select-loai-san-pham/select-loai-san-pham.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
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
    RouterModule.forChild([{
      path: '',
      component: ThemMoiComponent,
    }]),
  ],
})
export class ThemMoiModule { }
