import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoleGuard } from '../shared/services/guards/role.guard';
import { environment } from 'src/environments/environment';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: '', redirectTo: 'quan-ly-bat-dong-san', pathMatch: 'full'
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
