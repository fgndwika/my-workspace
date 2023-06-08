import { Component } from '@angular/core';
import { UserService } from 'libs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';

  userCount: number = 0;

  constructor(private userService: UserService) {}

  refreshUserCount(): void {
    this.userCount = this.userService.getUsers().length;
  }
}
