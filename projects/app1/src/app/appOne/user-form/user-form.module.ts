import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserFormRoutingModule } from './user-form-routing.module';
import { UserFormComponent } from './user-form.component';

@NgModule({
  imports: [FormsModule, UserFormRoutingModule],
  declarations: [
    UserFormComponent
  ]
})
export class UserFormModule {}
