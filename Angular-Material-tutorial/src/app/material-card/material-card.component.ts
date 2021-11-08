import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.css'],
})
export class MaterialCardComponent implements OnInit {
  usersList!: Array<User>;
  showCards:boolean = false;
  constructor() {}

  ngOnInit(): void {
    
    this.usersList = [
      { name: 'Bob Fernandex', email: 'bob@gmail.com' },
      { name: 'Mary Lubscous', email: 'marydg@gmail.com' },
      { name: 'Gordg kunjaghtlk', email: 'gsodfgfb@gmail.com' },
      { name: 'Alexabder oliview', email: 'alext@gmail.com' },
      { name: 'Georgina gerofi', email: 'georgoina@gmail.com' },
      { name: 'Maxidexi f.d', email: 'maxi@gmail.com' },
    ];
  }
}
