import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-badges',
  templateUrl: './material-badges.component.html',
  styleUrls: ['./material-badges.component.css'],
})
export class MaterialBadgesComponent implements OnInit {
  badgeCounter = 0;
  constructor() {}

  ngOnInit(): void {
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
