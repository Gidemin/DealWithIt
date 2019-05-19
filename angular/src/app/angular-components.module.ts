import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    ReactiveFormsModule
  ]
})
export class AngularComponentsModule { }
