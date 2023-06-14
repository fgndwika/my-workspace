import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tests: Array<string> = [];

  add() {
    this.tests.push(new Date().getTime().toString());
  }

  removeRandom() {
    if (this.tests.length === 0) {
      return;
    }

    const randIndex = Math.floor(Math.random() * (this.tests.length - 1))
    this.tests.splice(randIndex, 1);
  }
}
