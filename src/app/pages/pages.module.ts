import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { NgxEditorModule } from 'ngx-editor';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NgxEditorModule,
    NbMenuModule,
    ECommerceModule,
  ],
  declarations: [PagesComponent],
})
export class PagesModule {}
