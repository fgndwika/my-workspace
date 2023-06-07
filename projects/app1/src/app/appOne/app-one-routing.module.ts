import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppOneComponent } from './app-one/app-one.component';

const routes: Routes = [
  {
    path: '',
    component: AppOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppOneRoutingModule {}
