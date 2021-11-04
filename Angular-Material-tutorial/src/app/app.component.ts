import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Material-tutorial';
  badgeCounter = 0;
  constructor() {
    this.badgeCounter = 10;
  }
  incrementCount() {
    this.badgeCounter++;
  }
  decreaseCount() {
    if (this.badgeCounter < 0) return;
    this.badgeCounter--;
  }
  resetCount() {
    this.badgeCounter = 0;
  }
}
