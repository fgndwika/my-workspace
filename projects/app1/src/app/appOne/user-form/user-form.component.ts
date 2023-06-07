import { Component, OnInit } from '@angular/core';
import { User } from '~libs/entity/user/user.model';
import { UserService } from '~libs/entity/user/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userCount: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userCount = this.userService.getUsers().length;
  }

  createUser(value: any) {
    const user: User = Object.assign(new User(), value);
    this.userService.addUser(user);
    this.userCount = this.userService.getUsers().length;
  }
}
