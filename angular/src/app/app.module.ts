import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponentsModule } from './angular-components.module';
import { CreateTaskComponent } from './create-task/create-task.component';
import { GlobalDataService } from './global-data.service';
import { MatNativeDateModule } from '@angular/material';
import { NoteDisplayComponent } from './note-display/note-display.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    NoteDisplayComponent,
    NoteEditorComponent,
    TaskListComponent
  ],
  imports: [
    AppRoutingModule,
    AngularComponentsModule,
    BrowserModule,
    MatNativeDateModule
  ],
  providers: [GlobalDataService],
  bootstrap: [AppComponent],
  entryComponents: [NoteDisplayComponent]
})
export class AppModule { }
