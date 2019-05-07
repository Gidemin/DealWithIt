import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class AngularComponentsModule { }
