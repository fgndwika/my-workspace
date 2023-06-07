import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppTwoModule } from './app-two/app-two.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppTwoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
