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
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialInputFormComponent } from './material-input-form/material-input-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialCardImagesComponent } from './material-card-images/material-card-images.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTableComponent,
    MaterialCardComponent,
    MaterialButtonComponent,
    MaterialBadgesComponent,
    MaterialInputFormComponent,
    MaterialCardImagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
