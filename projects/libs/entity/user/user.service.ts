import { Injectable } from '@angular/core';

import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  readonly storageKey: string = 'USERS';

  getUsers(): User[] {
    const users = localStorage.getItem(this.storageKey);
    return users ? JSON.parse(users) : [];
  }

  addUser(user: User): void {
    const users = this.getUsers();
    users.push(user);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  updateUser(user: User): void {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === user.id);
    users[index] = user;
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  deleteUser(id: string): void {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === id);
    users.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  getUser(id: string): User | null {
    const users = this.getUsers();
    return users.find(u => u.id === id) || null;
  }
}
