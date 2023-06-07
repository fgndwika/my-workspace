import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppOneComponent } from './app-one.component';

const routes: Routes = [
  {
    path: '',
    component: AppOneComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./user-form/user-form.module').then(m => m.UserFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppOneRoutingModule {}
