import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MaterialTableComponent } from './material-table/material-table.component';
import { MaterialCardComponent } from './material-card/material-card.component';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialBadgesComponent } from './material-badges/material-badges.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTableComponent,
    MaterialCardComponent,
    MaterialButtonComponent,
    MaterialBadgesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
