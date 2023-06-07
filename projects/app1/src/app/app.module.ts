import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppOneModule } from './appOne/app-one.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppOneModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
