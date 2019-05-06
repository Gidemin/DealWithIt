import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { from } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    MatListModule,
    MatToolbarModule
  ]
})
export class AngularComponentsModule { }
