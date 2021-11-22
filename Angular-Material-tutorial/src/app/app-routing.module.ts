import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MaterialBadgesComponent } from './material-badges/material-badges.component';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialCardImagesComponent } from './material-card-images/material-card-images.component';
import { MaterialCardComponent } from './material-card/material-card.component';
import { MaterialInputFormComponent } from './material-input-form/material-input-form.component';
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
  {
    path: 'inputform',
    component: MaterialInputFormComponent,
  },
  {
    path: 'cardImages',
    component: MaterialCardImagesComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
