import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { UserService } from '~libs';

@Component({
  selector: 'app-app-two',
  templateUrl: './app-two.component.html',
  styleUrls: ['./app-two.component.scss']
})
export class AppTwoComponent {
  userCount: number = 0;

  constructor(@Inject(APP_BASE_HREF) readonly baseHref: string, private userService: UserService) { }

  refreshUserCount(): void {
    this.userCount = this.userService.getUsers().length;
  }

}
