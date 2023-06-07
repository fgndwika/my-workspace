import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppTwoComponent } from './app-two.component';

const routes: Routes = [
  {
    path: '',
    component: AppTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppTwoRoutingModule {}
