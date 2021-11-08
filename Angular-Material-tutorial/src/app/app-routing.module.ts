import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialBadgesComponent } from './material-badges/material-badges.component';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialCardComponent } from './material-card/material-card.component';
import { MaterialTableComponent } from './material-table/material-table.component';

const routes: Routes = [
  {
    path: 'badges',
    component: MaterialBadgesComponent,
  },
  {
    path: 'buttons',
    component: MaterialButtonComponent,
  },
  {
    path: 'table',
    component: MaterialTableComponent,
  },
  {
    path: 'card',
    component: MaterialCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
