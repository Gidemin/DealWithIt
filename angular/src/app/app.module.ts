import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponentsModule } from './angular-components.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import { MatNativeDateModule } from '@angular/material';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TaskListComponent
  ],
  imports: [
    AppRoutingModule,
    AngularComponentsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
