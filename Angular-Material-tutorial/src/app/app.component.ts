import { Route } from '@angular/compiler/src/core';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Material-tutorial';
  
  constructor(private router: Router) {
   
  }
  
  materialCard() {
    this.router.navigateByUrl('/card');
  }
}
