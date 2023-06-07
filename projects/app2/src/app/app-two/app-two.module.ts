import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppTwoRoutingModule } from './app-two-routing.module';
import { AppTwoComponent } from './app-two.component';

@NgModule({
  imports: [CommonModule, AppTwoRoutingModule],
  declarations: [AppTwoComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/app2/' }],
})
export class AppTwoModule {}
